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
// UpsertAccountRequestBodyIdentification
/**
 * Account identification requires an accountId, domain or both
**/
var UpsertAccountRequestBodyIdentification = /** @class */ (function (_super) {
    __extends(UpsertAccountRequestBodyIdentification, _super);
    function UpsertAccountRequestBodyIdentification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], UpsertAccountRequestBodyIdentification.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], UpsertAccountRequestBodyIdentification.prototype, "domain", void 0);
    return UpsertAccountRequestBodyIdentification;
}(SpeakeasyBase));
export { UpsertAccountRequestBodyIdentification };
// UpsertAccountRequestBodyMembersIdentification
/**
 * User identification requires a userId, email or both
**/
var UpsertAccountRequestBodyMembersIdentification = /** @class */ (function (_super) {
    __extends(UpsertAccountRequestBodyMembersIdentification, _super);
    function UpsertAccountRequestBodyMembersIdentification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UpsertAccountRequestBodyMembersIdentification.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], UpsertAccountRequestBodyMembersIdentification.prototype, "userId", void 0);
    return UpsertAccountRequestBodyMembersIdentification;
}(SpeakeasyBase));
export { UpsertAccountRequestBodyMembersIdentification };
// UpsertAccountRequestBodyMembers
/**
 * Identification requires an accountId, domain or both
**/
var UpsertAccountRequestBodyMembers = /** @class */ (function (_super) {
    __extends(UpsertAccountRequestBodyMembers, _super);
    function UpsertAccountRequestBodyMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identification" }),
        __metadata("design:type", UpsertAccountRequestBodyMembersIdentification)
    ], UpsertAccountRequestBodyMembers.prototype, "identification", void 0);
    return UpsertAccountRequestBodyMembers;
}(SpeakeasyBase));
export { UpsertAccountRequestBodyMembers };
// UpsertAccountRequestBody
/**
 * Update properties and/or members of an account
**/
var UpsertAccountRequestBody = /** @class */ (function (_super) {
    __extends(UpsertAccountRequestBody, _super);
    function UpsertAccountRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identification" }),
        __metadata("design:type", UpsertAccountRequestBodyIdentification)
    ], UpsertAccountRequestBody.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=members", elemType: UpsertAccountRequestBodyMembers }),
        __metadata("design:type", Array)
    ], UpsertAccountRequestBody.prototype, "members", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", Map)
    ], UpsertAccountRequestBody.prototype, "properties", void 0);
    return UpsertAccountRequestBody;
}(SpeakeasyBase));
export { UpsertAccountRequestBody };
var UpsertAccount201ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(UpsertAccount201ApplicationJsonMeta, _super);
    function UpsertAccount201ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], UpsertAccount201ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], UpsertAccount201ApplicationJsonMeta.prototype, "status", void 0);
    return UpsertAccount201ApplicationJsonMeta;
}(SpeakeasyBase));
export { UpsertAccount201ApplicationJsonMeta };
var UpsertAccount201ApplicationJson = /** @class */ (function (_super) {
    __extends(UpsertAccount201ApplicationJson, _super);
    function UpsertAccount201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpsertAccount201ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", UpsertAccount201ApplicationJsonMeta)
    ], UpsertAccount201ApplicationJson.prototype, "meta", void 0);
    return UpsertAccount201ApplicationJson;
}(SpeakeasyBase));
export { UpsertAccount201ApplicationJson };
// UpsertAccount400ApplicationJsonErrorsParameters
/**
 * All query-, header- and path- parameters that seemed incorrect
**/
var UpsertAccount400ApplicationJsonErrorsParameters = /** @class */ (function (_super) {
    __extends(UpsertAccount400ApplicationJsonErrorsParameters, _super);
    function UpsertAccount400ApplicationJsonErrorsParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=header" }),
        __metadata("design:type", Map)
    ], UpsertAccount400ApplicationJsonErrorsParameters.prototype, "header", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", Map)
    ], UpsertAccount400ApplicationJsonErrorsParameters.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query" }),
        __metadata("design:type", Map)
    ], UpsertAccount400ApplicationJsonErrorsParameters.prototype, "query", void 0);
    return UpsertAccount400ApplicationJsonErrorsParameters;
}(SpeakeasyBase));
export { UpsertAccount400ApplicationJsonErrorsParameters };
// UpsertAccount400ApplicationJsonErrors
/**
 * Map that sums up all received values that seemed incorrect
**/
var UpsertAccount400ApplicationJsonErrors = /** @class */ (function (_super) {
    __extends(UpsertAccount400ApplicationJsonErrors, _super);
    function UpsertAccount400ApplicationJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields" }),
        __metadata("design:type", Map)
    ], UpsertAccount400ApplicationJsonErrors.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters" }),
        __metadata("design:type", UpsertAccount400ApplicationJsonErrorsParameters)
    ], UpsertAccount400ApplicationJsonErrors.prototype, "parameters", void 0);
    return UpsertAccount400ApplicationJsonErrors;
}(SpeakeasyBase));
export { UpsertAccount400ApplicationJsonErrors };
var UpsertAccount400ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(UpsertAccount400ApplicationJsonMeta, _super);
    function UpsertAccount400ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], UpsertAccount400ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], UpsertAccount400ApplicationJsonMeta.prototype, "status", void 0);
    return UpsertAccount400ApplicationJsonMeta;
}(SpeakeasyBase));
export { UpsertAccount400ApplicationJsonMeta };
var UpsertAccount400ApplicationJson = /** @class */ (function (_super) {
    __extends(UpsertAccount400ApplicationJson, _super);
    function UpsertAccount400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", UpsertAccount400ApplicationJsonErrors)
    ], UpsertAccount400ApplicationJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpsertAccount400ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", UpsertAccount400ApplicationJsonMeta)
    ], UpsertAccount400ApplicationJson.prototype, "meta", void 0);
    return UpsertAccount400ApplicationJson;
}(SpeakeasyBase));
export { UpsertAccount400ApplicationJson };
var UpsertAccount401ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(UpsertAccount401ApplicationJsonMeta, _super);
    function UpsertAccount401ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], UpsertAccount401ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], UpsertAccount401ApplicationJsonMeta.prototype, "status", void 0);
    return UpsertAccount401ApplicationJsonMeta;
}(SpeakeasyBase));
export { UpsertAccount401ApplicationJsonMeta };
var UpsertAccount401ApplicationJson = /** @class */ (function (_super) {
    __extends(UpsertAccount401ApplicationJson, _super);
    function UpsertAccount401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpsertAccount401ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", UpsertAccount401ApplicationJsonMeta)
    ], UpsertAccount401ApplicationJson.prototype, "meta", void 0);
    return UpsertAccount401ApplicationJson;
}(SpeakeasyBase));
export { UpsertAccount401ApplicationJson };
var UpsertAccount429ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(UpsertAccount429ApplicationJsonMeta, _super);
    function UpsertAccount429ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], UpsertAccount429ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], UpsertAccount429ApplicationJsonMeta.prototype, "status", void 0);
    return UpsertAccount429ApplicationJsonMeta;
}(SpeakeasyBase));
export { UpsertAccount429ApplicationJsonMeta };
var UpsertAccount429ApplicationJson = /** @class */ (function (_super) {
    __extends(UpsertAccount429ApplicationJson, _super);
    function UpsertAccount429ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpsertAccount429ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", UpsertAccount429ApplicationJsonMeta)
    ], UpsertAccount429ApplicationJson.prototype, "meta", void 0);
    return UpsertAccount429ApplicationJson;
}(SpeakeasyBase));
export { UpsertAccount429ApplicationJson };
var UpsertAccount500ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(UpsertAccount500ApplicationJsonMeta, _super);
    function UpsertAccount500ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], UpsertAccount500ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], UpsertAccount500ApplicationJsonMeta.prototype, "status", void 0);
    return UpsertAccount500ApplicationJsonMeta;
}(SpeakeasyBase));
export { UpsertAccount500ApplicationJsonMeta };
var UpsertAccount500ApplicationJson = /** @class */ (function (_super) {
    __extends(UpsertAccount500ApplicationJson, _super);
    function UpsertAccount500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpsertAccount500ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", UpsertAccount500ApplicationJsonMeta)
    ], UpsertAccount500ApplicationJson.prototype, "meta", void 0);
    return UpsertAccount500ApplicationJson;
}(SpeakeasyBase));
export { UpsertAccount500ApplicationJson };
var UpsertAccountRequest = /** @class */ (function (_super) {
    __extends(UpsertAccountRequest, _super);
    function UpsertAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpsertAccountRequestBody)
    ], UpsertAccountRequest.prototype, "request", void 0);
    return UpsertAccountRequest;
}(SpeakeasyBase));
export { UpsertAccountRequest };
var UpsertAccountResponse = /** @class */ (function (_super) {
    __extends(UpsertAccountResponse, _super);
    function UpsertAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpsertAccountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpsertAccountResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpsertAccountResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpsertAccount201ApplicationJson)
    ], UpsertAccountResponse.prototype, "upsertAccount201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpsertAccount400ApplicationJson)
    ], UpsertAccountResponse.prototype, "upsertAccount400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpsertAccount401ApplicationJson)
    ], UpsertAccountResponse.prototype, "upsertAccount401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpsertAccount429ApplicationJson)
    ], UpsertAccountResponse.prototype, "upsertAccount429ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpsertAccount500ApplicationJson)
    ], UpsertAccountResponse.prototype, "upsertAccount500ApplicationJsonObject", void 0);
    return UpsertAccountResponse;
}(SpeakeasyBase));
export { UpsertAccountResponse };
