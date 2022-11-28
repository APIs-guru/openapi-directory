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
import * as shared from "../shared";
var TfaEnableSecurity = /** @class */ (function (_super) {
    __extends(TfaEnableSecurity, _super);
    function TfaEnableSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], TfaEnableSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], TfaEnableSecurity.prototype, "oauth", void 0);
    return TfaEnableSecurity;
}(SpeakeasyBase));
export { TfaEnableSecurity };
var TfaEnableDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(TfaEnableDefaultApplicationJson, _super);
    function TfaEnableDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], TfaEnableDefaultApplicationJson.prototype, "errors", void 0);
    return TfaEnableDefaultApplicationJson;
}(SpeakeasyBase));
export { TfaEnableDefaultApplicationJson };
var TfaEnableRequest = /** @class */ (function (_super) {
    __extends(TfaEnableRequest, _super);
    function TfaEnableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TfaEnableSecurity)
    ], TfaEnableRequest.prototype, "security", void 0);
    return TfaEnableRequest;
}(SpeakeasyBase));
export { TfaEnableRequest };
var TfaEnableResponse = /** @class */ (function (_super) {
    __extends(TfaEnableResponse, _super);
    function TfaEnableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TfaEnableResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TfaEnableResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], TfaEnableResponse.prototype, "tfaEnable200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TfaEnableDefaultApplicationJson)
    ], TfaEnableResponse.prototype, "tfaEnableDefaultApplicationJsonObject", void 0);
    return TfaEnableResponse;
}(SpeakeasyBase));
export { TfaEnableResponse };
