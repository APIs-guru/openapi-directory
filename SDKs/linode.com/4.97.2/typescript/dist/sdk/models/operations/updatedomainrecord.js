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
var UpdateDomainRecordPathParams = /** @class */ (function (_super) {
    __extends(UpdateDomainRecordPathParams, _super);
    function UpdateDomainRecordPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainId" }),
        __metadata("design:type", Number)
    ], UpdateDomainRecordPathParams.prototype, "domainId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recordId" }),
        __metadata("design:type", Number)
    ], UpdateDomainRecordPathParams.prototype, "recordId", void 0);
    return UpdateDomainRecordPathParams;
}(SpeakeasyBase));
export { UpdateDomainRecordPathParams };
var UpdateDomainRecordSecurity = /** @class */ (function (_super) {
    __extends(UpdateDomainRecordSecurity, _super);
    function UpdateDomainRecordSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], UpdateDomainRecordSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateDomainRecordSecurity.prototype, "oauth", void 0);
    return UpdateDomainRecordSecurity;
}(SpeakeasyBase));
export { UpdateDomainRecordSecurity };
var UpdateDomainRecordDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateDomainRecordDefaultApplicationJson, _super);
    function UpdateDomainRecordDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], UpdateDomainRecordDefaultApplicationJson.prototype, "errors", void 0);
    return UpdateDomainRecordDefaultApplicationJson;
}(SpeakeasyBase));
export { UpdateDomainRecordDefaultApplicationJson };
var UpdateDomainRecordRequest = /** @class */ (function (_super) {
    __extends(UpdateDomainRecordRequest, _super);
    function UpdateDomainRecordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDomainRecordPathParams)
    ], UpdateDomainRecordRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DomainRecordInput)
    ], UpdateDomainRecordRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDomainRecordSecurity)
    ], UpdateDomainRecordRequest.prototype, "security", void 0);
    return UpdateDomainRecordRequest;
}(SpeakeasyBase));
export { UpdateDomainRecordRequest };
var UpdateDomainRecordResponse = /** @class */ (function (_super) {
    __extends(UpdateDomainRecordResponse, _super);
    function UpdateDomainRecordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDomainRecordResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DomainRecord)
    ], UpdateDomainRecordResponse.prototype, "domainRecord", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDomainRecordResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDomainRecordDefaultApplicationJson)
    ], UpdateDomainRecordResponse.prototype, "updateDomainRecordDefaultApplicationJsonObject", void 0);
    return UpdateDomainRecordResponse;
}(SpeakeasyBase));
export { UpdateDomainRecordResponse };
