var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppEngineRouting } from "./appenginerouting";
export var AppEngineHttpRequestHttpMethodEnum;
(function (AppEngineHttpRequestHttpMethodEnum) {
    AppEngineHttpRequestHttpMethodEnum["HttpMethodUnspecified"] = "HTTP_METHOD_UNSPECIFIED";
    AppEngineHttpRequestHttpMethodEnum["Post"] = "POST";
    AppEngineHttpRequestHttpMethodEnum["Get"] = "GET";
    AppEngineHttpRequestHttpMethodEnum["Head"] = "HEAD";
    AppEngineHttpRequestHttpMethodEnum["Put"] = "PUT";
    AppEngineHttpRequestHttpMethodEnum["Delete"] = "DELETE";
    AppEngineHttpRequestHttpMethodEnum["Patch"] = "PATCH";
    AppEngineHttpRequestHttpMethodEnum["Options"] = "OPTIONS";
})(AppEngineHttpRequestHttpMethodEnum || (AppEngineHttpRequestHttpMethodEnum = {}));
// AppEngineHttpRequest
/**
 * App Engine HTTP request. The message defines the HTTP request that is sent to an App Engine app when the task is dispatched. Using AppEngineHttpRequest requires [`appengine.applications.get`](https://cloud.google.com/appengine/docs/admin-api/access-control) Google IAM permission for the project and the following scope: `https://www.googleapis.com/auth/cloud-platform` The task will be delivered to the App Engine app which belongs to the same project as the queue. For more information, see [How Requests are Routed](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed) and how routing is affected by [dispatch files](https://cloud.google.com/appengine/docs/python/config/dispatchref). Traffic is encrypted during transport and never leaves Google datacenters. Because this traffic is carried over a communication mechanism internal to Google, you cannot explicitly set the protocol (for example, HTTP or HTTPS). The request to the handler, however, will appear to have used the HTTP protocol. The AppEngineRouting used to construct the URL that the task is delivered to can be set at the queue-level or task-level: * If app_engine_routing_override is set on the queue, this value is used for all tasks in the queue, no matter what the setting is for the task-level app_engine_routing. The `url` that the task will be sent to is: * `url =` host `+` relative_uri Tasks can be dispatched to secure app handlers, unsecure app handlers, and URIs restricted with [`login: admin`](https://cloud.google.com/appengine/docs/standard/python/config/appref). Because tasks are not run as any user, they cannot be dispatched to URIs restricted with [`login: required`](https://cloud.google.com/appengine/docs/standard/python/config/appref) Task dispatches also do not follow redirects. The task attempt has succeeded if the app's request handler returns an HTTP response code in the range [`200` - `299`]. The task attempt has failed if the app's handler returns a non-2xx response code or Cloud Tasks does not receive response before the deadline. Failed tasks will be retried according to the retry configuration. `503` (Service Unavailable) is considered an App Engine system error instead of an application error and will cause Cloud Tasks' traffic congestion control to temporarily throttle the queue's dispatches. Unlike other types of task targets, a `429` (Too Many Requests) response from an app handler does not cause traffic congestion control to throttle the queue.
**/
var AppEngineHttpRequest = /** @class */ (function (_super) {
    __extends(AppEngineHttpRequest, _super);
    function AppEngineHttpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appEngineRouting" }),
        __metadata("design:type", AppEngineRouting)
    ], AppEngineHttpRequest.prototype, "appEngineRouting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], AppEngineHttpRequest.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], AppEngineHttpRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpMethod" }),
        __metadata("design:type", String)
    ], AppEngineHttpRequest.prototype, "httpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relativeUri" }),
        __metadata("design:type", String)
    ], AppEngineHttpRequest.prototype, "relativeUri", void 0);
    return AppEngineHttpRequest;
}(SpeakeasyBase));
export { AppEngineHttpRequest };
