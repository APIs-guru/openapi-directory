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
// GoogleIdentityStsV1IntrospectTokenResponse
/**
 * Response message for IntrospectToken.
**/
var GoogleIdentityStsV1IntrospectTokenResponse = /** @class */ (function (_super) {
    __extends(GoogleIdentityStsV1IntrospectTokenResponse, _super);
    function GoogleIdentityStsV1IntrospectTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], GoogleIdentityStsV1IntrospectTokenResponse.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client_id" }),
        __metadata("design:type", String)
    ], GoogleIdentityStsV1IntrospectTokenResponse.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exp" }),
        __metadata("design:type", String)
    ], GoogleIdentityStsV1IntrospectTokenResponse.prototype, "exp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iat" }),
        __metadata("design:type", String)
    ], GoogleIdentityStsV1IntrospectTokenResponse.prototype, "iat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iss" }),
        __metadata("design:type", String)
    ], GoogleIdentityStsV1IntrospectTokenResponse.prototype, "iss", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], GoogleIdentityStsV1IntrospectTokenResponse.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub" }),
        __metadata("design:type", String)
    ], GoogleIdentityStsV1IntrospectTokenResponse.prototype, "sub", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], GoogleIdentityStsV1IntrospectTokenResponse.prototype, "username", void 0);
    return GoogleIdentityStsV1IntrospectTokenResponse;
}(SpeakeasyBase));
export { GoogleIdentityStsV1IntrospectTokenResponse };
