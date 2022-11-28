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
export var AppEngineHttpTargetHttpMethodEnum;
(function (AppEngineHttpTargetHttpMethodEnum) {
    AppEngineHttpTargetHttpMethodEnum["HttpMethodUnspecified"] = "HTTP_METHOD_UNSPECIFIED";
    AppEngineHttpTargetHttpMethodEnum["Post"] = "POST";
    AppEngineHttpTargetHttpMethodEnum["Get"] = "GET";
    AppEngineHttpTargetHttpMethodEnum["Head"] = "HEAD";
    AppEngineHttpTargetHttpMethodEnum["Put"] = "PUT";
    AppEngineHttpTargetHttpMethodEnum["Delete"] = "DELETE";
    AppEngineHttpTargetHttpMethodEnum["Patch"] = "PATCH";
    AppEngineHttpTargetHttpMethodEnum["Options"] = "OPTIONS";
})(AppEngineHttpTargetHttpMethodEnum || (AppEngineHttpTargetHttpMethodEnum = {}));
// AppEngineHttpTarget
/**
 * App Engine target. The job will be pushed to a job handler by means of an HTTP request via an http_method such as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an HTTP response code in the range [200 - 299]. Error 503 is considered an App Engine system error instead of an application error. Requests returning error 503 will be retried regardless of retry configuration and not counted against retry counts. Any other response code, or a failure to receive a response before the deadline, constitutes a failed attempt.
**/
var AppEngineHttpTarget = /** @class */ (function (_super) {
    __extends(AppEngineHttpTarget, _super);
    function AppEngineHttpTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appEngineRouting" }),
        __metadata("design:type", AppEngineRouting)
    ], AppEngineHttpTarget.prototype, "appEngineRouting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], AppEngineHttpTarget.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", Map)
    ], AppEngineHttpTarget.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpMethod" }),
        __metadata("design:type", String)
    ], AppEngineHttpTarget.prototype, "httpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relativeUri" }),
        __metadata("design:type", String)
    ], AppEngineHttpTarget.prototype, "relativeUri", void 0);
    return AppEngineHttpTarget;
}(SpeakeasyBase));
export { AppEngineHttpTarget };
