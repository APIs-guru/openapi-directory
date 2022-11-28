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
var CreateDomainRecordPathParams = /** @class */ (function (_super) {
    __extends(CreateDomainRecordPathParams, _super);
    function CreateDomainRecordPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainId" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordPathParams.prototype, "domainId", void 0);
    return CreateDomainRecordPathParams;
}(SpeakeasyBase));
export { CreateDomainRecordPathParams };
export var CreateDomainRecordRequestBodyTagEnum;
(function (CreateDomainRecordRequestBodyTagEnum) {
    CreateDomainRecordRequestBodyTagEnum["Issue"] = "issue";
    CreateDomainRecordRequestBodyTagEnum["Issuewild"] = "issuewild";
    CreateDomainRecordRequestBodyTagEnum["Iodef"] = "iodef";
})(CreateDomainRecordRequestBodyTagEnum || (CreateDomainRecordRequestBodyTagEnum = {}));
export var CreateDomainRecordRequestBodyTypeEnum;
(function (CreateDomainRecordRequestBodyTypeEnum) {
    CreateDomainRecordRequestBodyTypeEnum["A"] = "A";
    CreateDomainRecordRequestBodyTypeEnum["Aaaa"] = "AAAA";
    CreateDomainRecordRequestBodyTypeEnum["Ns"] = "NS";
    CreateDomainRecordRequestBodyTypeEnum["Mx"] = "MX";
    CreateDomainRecordRequestBodyTypeEnum["Cname"] = "CNAME";
    CreateDomainRecordRequestBodyTypeEnum["Txt"] = "TXT";
    CreateDomainRecordRequestBodyTypeEnum["Srv"] = "SRV";
    CreateDomainRecordRequestBodyTypeEnum["Ptr"] = "PTR";
    CreateDomainRecordRequestBodyTypeEnum["Caa"] = "CAA";
})(CreateDomainRecordRequestBodyTypeEnum || (CreateDomainRecordRequestBodyTypeEnum = {}));
var CreateDomainRecordRequestBodyInput = /** @class */ (function (_super) {
    __extends(CreateDomainRecordRequestBodyInput, _super);
    function CreateDomainRecordRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBodyInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBodyInput.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBodyInput.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBodyInput.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBodyInput.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBodyInput.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBodyInput.prototype, "target", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl_sec" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBodyInput.prototype, "ttlSec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateDomainRecordRequestBodyInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], CreateDomainRecordRequestBodyInput.prototype, "weight", void 0);
    return CreateDomainRecordRequestBodyInput;
}(SpeakeasyBase));
export { CreateDomainRecordRequestBodyInput };
var CreateDomainRecordSecurity = /** @class */ (function (_super) {
    __extends(CreateDomainRecordSecurity, _super);
    function CreateDomainRecordSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CreateDomainRecordSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CreateDomainRecordSecurity.prototype, "oauth", void 0);
    return CreateDomainRecordSecurity;
}(SpeakeasyBase));
export { CreateDomainRecordSecurity };
var CreateDomainRecordDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CreateDomainRecordDefaultApplicationJson, _super);
    function CreateDomainRecordDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CreateDomainRecordDefaultApplicationJson.prototype, "errors", void 0);
    return CreateDomainRecordDefaultApplicationJson;
}(SpeakeasyBase));
export { CreateDomainRecordDefaultApplicationJson };
var CreateDomainRecordRequest = /** @class */ (function (_super) {
    __extends(CreateDomainRecordRequest, _super);
    function CreateDomainRecordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomainRecordPathParams)
    ], CreateDomainRecordRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateDomainRecordRequestBodyInput)
    ], CreateDomainRecordRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomainRecordSecurity)
    ], CreateDomainRecordRequest.prototype, "security", void 0);
    return CreateDomainRecordRequest;
}(SpeakeasyBase));
export { CreateDomainRecordRequest };
var CreateDomainRecordResponse = /** @class */ (function (_super) {
    __extends(CreateDomainRecordResponse, _super);
    function CreateDomainRecordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDomainRecordResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DomainRecord)
    ], CreateDomainRecordResponse.prototype, "domainRecord", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDomainRecordResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDomainRecordDefaultApplicationJson)
    ], CreateDomainRecordResponse.prototype, "createDomainRecordDefaultApplicationJsonObject", void 0);
    return CreateDomainRecordResponse;
}(SpeakeasyBase));
export { CreateDomainRecordResponse };
