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
var GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption1 = /** @class */ (function (_super) {
    __extends(GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption1, _super);
    function GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption1.prototype, "hapikey", void 0);
    return GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption1;
}(SpeakeasyBase));
export { GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption1 };
var GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption2 = /** @class */ (function (_super) {
    __extends(GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption2, _super);
    function GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption2.prototype, "oauth2Legacy", void 0);
    return GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption2;
}(SpeakeasyBase));
export { GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption2 };
var GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption3 = /** @class */ (function (_super) {
    __extends(GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption3, _super);
    function GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption3.prototype, "oauth2Legacy", void 0);
    return GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption3;
}(SpeakeasyBase));
export { GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption3 };
var GetCommunicationPreferencesV3DefinitionsGetPageSecurity = /** @class */ (function (_super) {
    __extends(GetCommunicationPreferencesV3DefinitionsGetPageSecurity, _super);
    function GetCommunicationPreferencesV3DefinitionsGetPageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption1)
    ], GetCommunicationPreferencesV3DefinitionsGetPageSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption2)
    ], GetCommunicationPreferencesV3DefinitionsGetPageSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", GetCommunicationPreferencesV3DefinitionsGetPageSecurityOption3)
    ], GetCommunicationPreferencesV3DefinitionsGetPageSecurity.prototype, "option3", void 0);
    return GetCommunicationPreferencesV3DefinitionsGetPageSecurity;
}(SpeakeasyBase));
export { GetCommunicationPreferencesV3DefinitionsGetPageSecurity };
var GetCommunicationPreferencesV3DefinitionsGetPageRequest = /** @class */ (function (_super) {
    __extends(GetCommunicationPreferencesV3DefinitionsGetPageRequest, _super);
    function GetCommunicationPreferencesV3DefinitionsGetPageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetCommunicationPreferencesV3DefinitionsGetPageSecurity)
    ], GetCommunicationPreferencesV3DefinitionsGetPageRequest.prototype, "security", void 0);
    return GetCommunicationPreferencesV3DefinitionsGetPageRequest;
}(SpeakeasyBase));
export { GetCommunicationPreferencesV3DefinitionsGetPageRequest };
var GetCommunicationPreferencesV3DefinitionsGetPageResponse = /** @class */ (function (_super) {
    __extends(GetCommunicationPreferencesV3DefinitionsGetPageResponse, _super);
    function GetCommunicationPreferencesV3DefinitionsGetPageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetCommunicationPreferencesV3DefinitionsGetPageResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetCommunicationPreferencesV3DefinitionsGetPageResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetCommunicationPreferencesV3DefinitionsGetPageResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SubscriptionDefinitionsResponse)
    ], GetCommunicationPreferencesV3DefinitionsGetPageResponse.prototype, "subscriptionDefinitionsResponse", void 0);
    return GetCommunicationPreferencesV3DefinitionsGetPageResponse;
}(SpeakeasyBase));
export { GetCommunicationPreferencesV3DefinitionsGetPageResponse };
