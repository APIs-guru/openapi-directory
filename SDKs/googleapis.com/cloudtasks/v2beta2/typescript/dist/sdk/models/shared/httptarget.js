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
import { HeaderOverride } from "./headeroverride";
import { OAuthToken } from "./oauthtoken";
import { OidcToken } from "./oidctoken";
import { UriOverride } from "./urioverride";
export var HttpTargetHttpMethodEnum;
(function (HttpTargetHttpMethodEnum) {
    HttpTargetHttpMethodEnum["HttpMethodUnspecified"] = "HTTP_METHOD_UNSPECIFIED";
    HttpTargetHttpMethodEnum["Post"] = "POST";
    HttpTargetHttpMethodEnum["Get"] = "GET";
    HttpTargetHttpMethodEnum["Head"] = "HEAD";
    HttpTargetHttpMethodEnum["Put"] = "PUT";
    HttpTargetHttpMethodEnum["Delete"] = "DELETE";
    HttpTargetHttpMethodEnum["Patch"] = "PATCH";
    HttpTargetHttpMethodEnum["Options"] = "OPTIONS";
})(HttpTargetHttpMethodEnum || (HttpTargetHttpMethodEnum = {}));
// HttpTarget
/**
 * HTTP target. When specified as a Queue, all the tasks with [HttpRequest] will be overridden according to the target.
**/
var HttpTarget = /** @class */ (function (_super) {
    __extends(HttpTarget, _super);
    function HttpTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headerOverrides", elemType: HeaderOverride }),
        __metadata("design:type", Array)
    ], HttpTarget.prototype, "headerOverrides", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpMethod" }),
        __metadata("design:type", String)
    ], HttpTarget.prototype, "httpMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauthToken" }),
        __metadata("design:type", OAuthToken)
    ], HttpTarget.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oidcToken" }),
        __metadata("design:type", OidcToken)
    ], HttpTarget.prototype, "oidcToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uriOverride" }),
        __metadata("design:type", UriOverride)
    ], HttpTarget.prototype, "uriOverride", void 0);
    return HttpTarget;
}(SpeakeasyBase));
export { HttpTarget };
