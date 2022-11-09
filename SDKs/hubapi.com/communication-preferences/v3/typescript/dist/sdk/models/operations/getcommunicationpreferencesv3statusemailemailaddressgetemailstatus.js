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
import * as shared from "../shared";
var GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusPathParams = /** @class */ (function (_super) {
    __extends(GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusPathParams, _super);
    function GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=emailAddress" }),
        __metadata("design:type", String)
    ], GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusPathParams.prototype, "emailAddress", void 0);
    return GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusPathParams;
}(SpeakeasyBase));
export { GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusPathParams };
var GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption1 = /** @class */ (function (_super) {
    __extends(GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption1, _super);
    function GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption1.prototype, "hapikey", void 0);
    return GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption1;
}(SpeakeasyBase));
export { GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption1 };
var GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption2 = /** @class */ (function (_super) {
    __extends(GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption2, _super);
    function GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption2.prototype, "oauth2Legacy", void 0);
    return GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption2;
}(SpeakeasyBase));
export { GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption2 };
var GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption3 = /** @class */ (function (_super) {
    __extends(GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption3, _super);
    function GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption3.prototype, "oauth2Legacy", void 0);
    return GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption3;
}(SpeakeasyBase));
export { GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption3 };
var GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity = /** @class */ (function (_super) {
    __extends(GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity, _super);
    function GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption1)
    ], GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption2)
    ], GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurityOption3)
    ], GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity.prototype, "option3", void 0);
    return GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity;
}(SpeakeasyBase));
export { GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity };
var GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest = /** @class */ (function (_super) {
    __extends(GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest, _super);
    function GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusPathParams)
    ], GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusSecurity)
    ], GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest.prototype, "security", void 0);
    return GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest;
}(SpeakeasyBase));
export { GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusRequest };
var GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse = /** @class */ (function (_super) {
    __extends(GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse, _super);
    function GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PublicSubscriptionStatusesResponse)
    ], GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse.prototype, "publicSubscriptionStatusesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse.prototype, "statusCode", void 0);
    return GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse;
}(SpeakeasyBase));
export { GetCommunicationPreferencesV3StatusEmailEmailAddressGetEmailStatusResponse };
