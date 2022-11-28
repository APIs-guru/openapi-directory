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
export var HttpRouteRedirectResponseCodeEnum;
(function (HttpRouteRedirectResponseCodeEnum) {
    HttpRouteRedirectResponseCodeEnum["ResponseCodeUnspecified"] = "RESPONSE_CODE_UNSPECIFIED";
    HttpRouteRedirectResponseCodeEnum["MovedPermanentlyDefault"] = "MOVED_PERMANENTLY_DEFAULT";
    HttpRouteRedirectResponseCodeEnum["Found"] = "FOUND";
    HttpRouteRedirectResponseCodeEnum["SeeOther"] = "SEE_OTHER";
    HttpRouteRedirectResponseCodeEnum["TemporaryRedirect"] = "TEMPORARY_REDIRECT";
    HttpRouteRedirectResponseCodeEnum["PermanentRedirect"] = "PERMANENT_REDIRECT";
})(HttpRouteRedirectResponseCodeEnum || (HttpRouteRedirectResponseCodeEnum = {}));
// HttpRouteRedirect
/**
 * The specification for redirecting traffic.
**/
var HttpRouteRedirect = /** @class */ (function (_super) {
    __extends(HttpRouteRedirect, _super);
    function HttpRouteRedirect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostRedirect" }),
        __metadata("design:type", String)
    ], HttpRouteRedirect.prototype, "hostRedirect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpsRedirect" }),
        __metadata("design:type", Boolean)
    ], HttpRouteRedirect.prototype, "httpsRedirect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pathRedirect" }),
        __metadata("design:type", String)
    ], HttpRouteRedirect.prototype, "pathRedirect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portRedirect" }),
        __metadata("design:type", Number)
    ], HttpRouteRedirect.prototype, "portRedirect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prefixRewrite" }),
        __metadata("design:type", String)
    ], HttpRouteRedirect.prototype, "prefixRewrite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseCode" }),
        __metadata("design:type", String)
    ], HttpRouteRedirect.prototype, "responseCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stripQuery" }),
        __metadata("design:type", Boolean)
    ], HttpRouteRedirect.prototype, "stripQuery", void 0);
    return HttpRouteRedirect;
}(SpeakeasyBase));
export { HttpRouteRedirect };
