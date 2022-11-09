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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
// HttpRequestContext
/**
 * HTTP request data that is related to a reported error. This data should be provided by the application when reporting an error, unless the error report has been generated automatically from Google App Engine logs.
**/
var HttpRequestContext = /** @class */ (function (_super) {
    __extends(HttpRequestContext, _super);
    function HttpRequestContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=method" }),
        __metadata("design:type", String)
    ], HttpRequestContext.prototype, "method", void 0);
    __decorate([
        Metadata({ data: "json, name=referrer" }),
        __metadata("design:type", String)
    ], HttpRequestContext.prototype, "referrer", void 0);
    __decorate([
        Metadata({ data: "json, name=remoteIp" }),
        __metadata("design:type", String)
    ], HttpRequestContext.prototype, "remoteIp", void 0);
    __decorate([
        Metadata({ data: "json, name=responseStatusCode" }),
        __metadata("design:type", Number)
    ], HttpRequestContext.prototype, "responseStatusCode", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], HttpRequestContext.prototype, "url", void 0);
    __decorate([
        Metadata({ data: "json, name=userAgent" }),
        __metadata("design:type", String)
    ], HttpRequestContext.prototype, "userAgent", void 0);
    return HttpRequestContext;
}(SpeakeasyBase));
export { HttpRequestContext };
