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
var GetDomainRecordPathParams = /** @class */ (function (_super) {
    __extends(GetDomainRecordPathParams, _super);
    function GetDomainRecordPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainId" }),
        __metadata("design:type", Number)
    ], GetDomainRecordPathParams.prototype, "domainId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recordId" }),
        __metadata("design:type", Number)
    ], GetDomainRecordPathParams.prototype, "recordId", void 0);
    return GetDomainRecordPathParams;
}(SpeakeasyBase));
export { GetDomainRecordPathParams };
var GetDomainRecordSecurity = /** @class */ (function (_super) {
    __extends(GetDomainRecordSecurity, _super);
    function GetDomainRecordSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetDomainRecordSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetDomainRecordSecurity.prototype, "oauth", void 0);
    return GetDomainRecordSecurity;
}(SpeakeasyBase));
export { GetDomainRecordSecurity };
var GetDomainRecordDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetDomainRecordDefaultApplicationJson, _super);
    function GetDomainRecordDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetDomainRecordDefaultApplicationJson.prototype, "errors", void 0);
    return GetDomainRecordDefaultApplicationJson;
}(SpeakeasyBase));
export { GetDomainRecordDefaultApplicationJson };
var GetDomainRecordRequest = /** @class */ (function (_super) {
    __extends(GetDomainRecordRequest, _super);
    function GetDomainRecordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomainRecordPathParams)
    ], GetDomainRecordRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomainRecordSecurity)
    ], GetDomainRecordRequest.prototype, "security", void 0);
    return GetDomainRecordRequest;
}(SpeakeasyBase));
export { GetDomainRecordRequest };
var GetDomainRecordResponse = /** @class */ (function (_super) {
    __extends(GetDomainRecordResponse, _super);
    function GetDomainRecordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDomainRecordResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DomainRecord)
    ], GetDomainRecordResponse.prototype, "domainRecord", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDomainRecordResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomainRecordDefaultApplicationJson)
    ], GetDomainRecordResponse.prototype, "getDomainRecordDefaultApplicationJsonObject", void 0);
    return GetDomainRecordResponse;
}(SpeakeasyBase));
export { GetDomainRecordResponse };
