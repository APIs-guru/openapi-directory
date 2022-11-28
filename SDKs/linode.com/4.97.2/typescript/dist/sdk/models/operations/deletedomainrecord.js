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
var DeleteDomainRecordPathParams = /** @class */ (function (_super) {
    __extends(DeleteDomainRecordPathParams, _super);
    function DeleteDomainRecordPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainId" }),
        __metadata("design:type", Number)
    ], DeleteDomainRecordPathParams.prototype, "domainId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recordId" }),
        __metadata("design:type", Number)
    ], DeleteDomainRecordPathParams.prototype, "recordId", void 0);
    return DeleteDomainRecordPathParams;
}(SpeakeasyBase));
export { DeleteDomainRecordPathParams };
var DeleteDomainRecordSecurity = /** @class */ (function (_super) {
    __extends(DeleteDomainRecordSecurity, _super);
    function DeleteDomainRecordSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], DeleteDomainRecordSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], DeleteDomainRecordSecurity.prototype, "oauth", void 0);
    return DeleteDomainRecordSecurity;
}(SpeakeasyBase));
export { DeleteDomainRecordSecurity };
var DeleteDomainRecordDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDomainRecordDefaultApplicationJson, _super);
    function DeleteDomainRecordDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], DeleteDomainRecordDefaultApplicationJson.prototype, "errors", void 0);
    return DeleteDomainRecordDefaultApplicationJson;
}(SpeakeasyBase));
export { DeleteDomainRecordDefaultApplicationJson };
var DeleteDomainRecordRequest = /** @class */ (function (_super) {
    __extends(DeleteDomainRecordRequest, _super);
    function DeleteDomainRecordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDomainRecordPathParams)
    ], DeleteDomainRecordRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDomainRecordSecurity)
    ], DeleteDomainRecordRequest.prototype, "security", void 0);
    return DeleteDomainRecordRequest;
}(SpeakeasyBase));
export { DeleteDomainRecordRequest };
var DeleteDomainRecordResponse = /** @class */ (function (_super) {
    __extends(DeleteDomainRecordResponse, _super);
    function DeleteDomainRecordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteDomainRecordResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteDomainRecordResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteDomainRecordResponse.prototype, "deleteDomainRecord200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDomainRecordDefaultApplicationJson)
    ], DeleteDomainRecordResponse.prototype, "deleteDomainRecordDefaultApplicationJsonObject", void 0);
    return DeleteDomainRecordResponse;
}(SpeakeasyBase));
export { DeleteDomainRecordResponse };
