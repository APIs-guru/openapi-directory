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
// HttpRequest
/**
 * A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message.
**/
var HttpRequest = /** @class */ (function (_super) {
    __extends(HttpRequest, _super);
    function HttpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cacheFillBytes" }),
        __metadata("design:type", String)
    ], HttpRequest.prototype, "cacheFillBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cacheHit" }),
        __metadata("design:type", Boolean)
    ], HttpRequest.prototype, "cacheHit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cacheLookup" }),
        __metadata("design:type", Boolean)
    ], HttpRequest.prototype, "cacheLookup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cacheValidatedWithOriginServer" }),
        __metadata("design:type", Boolean)
    ], HttpRequest.prototype, "cacheValidatedWithOriginServer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latency" }),
        __metadata("design:type", String)
    ], HttpRequest.prototype, "latency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], HttpRequest.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referer" }),
        __metadata("design:type", String)
    ], HttpRequest.prototype, "referer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remoteIp" }),
        __metadata("design:type", String)
    ], HttpRequest.prototype, "remoteIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestMethod" }),
        __metadata("design:type", String)
    ], HttpRequest.prototype, "requestMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestSize" }),
        __metadata("design:type", String)
    ], HttpRequest.prototype, "requestSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestUrl" }),
        __metadata("design:type", String)
    ], HttpRequest.prototype, "requestUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=responseSize" }),
        __metadata("design:type", String)
    ], HttpRequest.prototype, "responseSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverIp" }),
        __metadata("design:type", String)
    ], HttpRequest.prototype, "serverIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], HttpRequest.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userAgent" }),
        __metadata("design:type", String)
    ], HttpRequest.prototype, "userAgent", void 0);
    return HttpRequest;
}(SpeakeasyBase));
export { HttpRequest };
