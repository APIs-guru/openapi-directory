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
var RemoveUserFromAccountPathParams = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccountPathParams, _super);
    function RemoveUserFromAccountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccountPathParams.prototype, "accountId", void 0);
    return RemoveUserFromAccountPathParams;
}(SpeakeasyBase));
export { RemoveUserFromAccountPathParams };
// RemoveUserFromAccountRequestBody
/**
 * The user being added/removed from the account
**/
var RemoveUserFromAccountRequestBody = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccountRequestBody, _super);
    function RemoveUserFromAccountRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccountRequestBody.prototype, "userId", void 0);
    return RemoveUserFromAccountRequestBody;
}(SpeakeasyBase));
export { RemoveUserFromAccountRequestBody };
var RemoveUserFromAccount201ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount201ApplicationJsonMeta, _super);
    function RemoveUserFromAccount201ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccount201ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], RemoveUserFromAccount201ApplicationJsonMeta.prototype, "status", void 0);
    return RemoveUserFromAccount201ApplicationJsonMeta;
}(SpeakeasyBase));
export { RemoveUserFromAccount201ApplicationJsonMeta };
var RemoveUserFromAccount201ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount201ApplicationJson, _super);
    function RemoveUserFromAccount201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccount201ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", RemoveUserFromAccount201ApplicationJsonMeta)
    ], RemoveUserFromAccount201ApplicationJson.prototype, "meta", void 0);
    return RemoveUserFromAccount201ApplicationJson;
}(SpeakeasyBase));
export { RemoveUserFromAccount201ApplicationJson };
// RemoveUserFromAccount400ApplicationJsonErrorsParameters
/**
 * All query-, header- and path- parameters that seemed incorrect
**/
var RemoveUserFromAccount400ApplicationJsonErrorsParameters = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount400ApplicationJsonErrorsParameters, _super);
    function RemoveUserFromAccount400ApplicationJsonErrorsParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=header" }),
        __metadata("design:type", Map)
    ], RemoveUserFromAccount400ApplicationJsonErrorsParameters.prototype, "header", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", Map)
    ], RemoveUserFromAccount400ApplicationJsonErrorsParameters.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query" }),
        __metadata("design:type", Map)
    ], RemoveUserFromAccount400ApplicationJsonErrorsParameters.prototype, "query", void 0);
    return RemoveUserFromAccount400ApplicationJsonErrorsParameters;
}(SpeakeasyBase));
export { RemoveUserFromAccount400ApplicationJsonErrorsParameters };
// RemoveUserFromAccount400ApplicationJsonErrors
/**
 * Map that sums up all received values that seemed incorrect
**/
var RemoveUserFromAccount400ApplicationJsonErrors = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount400ApplicationJsonErrors, _super);
    function RemoveUserFromAccount400ApplicationJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields" }),
        __metadata("design:type", Map)
    ], RemoveUserFromAccount400ApplicationJsonErrors.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters" }),
        __metadata("design:type", RemoveUserFromAccount400ApplicationJsonErrorsParameters)
    ], RemoveUserFromAccount400ApplicationJsonErrors.prototype, "parameters", void 0);
    return RemoveUserFromAccount400ApplicationJsonErrors;
}(SpeakeasyBase));
export { RemoveUserFromAccount400ApplicationJsonErrors };
var RemoveUserFromAccount400ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount400ApplicationJsonMeta, _super);
    function RemoveUserFromAccount400ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccount400ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], RemoveUserFromAccount400ApplicationJsonMeta.prototype, "status", void 0);
    return RemoveUserFromAccount400ApplicationJsonMeta;
}(SpeakeasyBase));
export { RemoveUserFromAccount400ApplicationJsonMeta };
var RemoveUserFromAccount400ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount400ApplicationJson, _super);
    function RemoveUserFromAccount400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", RemoveUserFromAccount400ApplicationJsonErrors)
    ], RemoveUserFromAccount400ApplicationJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccount400ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", RemoveUserFromAccount400ApplicationJsonMeta)
    ], RemoveUserFromAccount400ApplicationJson.prototype, "meta", void 0);
    return RemoveUserFromAccount400ApplicationJson;
}(SpeakeasyBase));
export { RemoveUserFromAccount400ApplicationJson };
var RemoveUserFromAccount401ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount401ApplicationJsonMeta, _super);
    function RemoveUserFromAccount401ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccount401ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], RemoveUserFromAccount401ApplicationJsonMeta.prototype, "status", void 0);
    return RemoveUserFromAccount401ApplicationJsonMeta;
}(SpeakeasyBase));
export { RemoveUserFromAccount401ApplicationJsonMeta };
var RemoveUserFromAccount401ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount401ApplicationJson, _super);
    function RemoveUserFromAccount401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccount401ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", RemoveUserFromAccount401ApplicationJsonMeta)
    ], RemoveUserFromAccount401ApplicationJson.prototype, "meta", void 0);
    return RemoveUserFromAccount401ApplicationJson;
}(SpeakeasyBase));
export { RemoveUserFromAccount401ApplicationJson };
var RemoveUserFromAccount403ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount403ApplicationJsonMeta, _super);
    function RemoveUserFromAccount403ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccount403ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], RemoveUserFromAccount403ApplicationJsonMeta.prototype, "status", void 0);
    return RemoveUserFromAccount403ApplicationJsonMeta;
}(SpeakeasyBase));
export { RemoveUserFromAccount403ApplicationJsonMeta };
var RemoveUserFromAccount403ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount403ApplicationJson, _super);
    function RemoveUserFromAccount403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccount403ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", RemoveUserFromAccount403ApplicationJsonMeta)
    ], RemoveUserFromAccount403ApplicationJson.prototype, "meta", void 0);
    return RemoveUserFromAccount403ApplicationJson;
}(SpeakeasyBase));
export { RemoveUserFromAccount403ApplicationJson };
var RemoveUserFromAccount429ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount429ApplicationJsonMeta, _super);
    function RemoveUserFromAccount429ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccount429ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], RemoveUserFromAccount429ApplicationJsonMeta.prototype, "status", void 0);
    return RemoveUserFromAccount429ApplicationJsonMeta;
}(SpeakeasyBase));
export { RemoveUserFromAccount429ApplicationJsonMeta };
var RemoveUserFromAccount429ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount429ApplicationJson, _super);
    function RemoveUserFromAccount429ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccount429ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", RemoveUserFromAccount429ApplicationJsonMeta)
    ], RemoveUserFromAccount429ApplicationJson.prototype, "meta", void 0);
    return RemoveUserFromAccount429ApplicationJson;
}(SpeakeasyBase));
export { RemoveUserFromAccount429ApplicationJson };
var RemoveUserFromAccount500ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount500ApplicationJsonMeta, _super);
    function RemoveUserFromAccount500ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccount500ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], RemoveUserFromAccount500ApplicationJsonMeta.prototype, "status", void 0);
    return RemoveUserFromAccount500ApplicationJsonMeta;
}(SpeakeasyBase));
export { RemoveUserFromAccount500ApplicationJsonMeta };
var RemoveUserFromAccount500ApplicationJson = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccount500ApplicationJson, _super);
    function RemoveUserFromAccount500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], RemoveUserFromAccount500ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", RemoveUserFromAccount500ApplicationJsonMeta)
    ], RemoveUserFromAccount500ApplicationJson.prototype, "meta", void 0);
    return RemoveUserFromAccount500ApplicationJson;
}(SpeakeasyBase));
export { RemoveUserFromAccount500ApplicationJson };
var RemoveUserFromAccountRequest = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccountRequest, _super);
    function RemoveUserFromAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveUserFromAccountPathParams)
    ], RemoveUserFromAccountRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", RemoveUserFromAccountRequestBody)
    ], RemoveUserFromAccountRequest.prototype, "request", void 0);
    return RemoveUserFromAccountRequest;
}(SpeakeasyBase));
export { RemoveUserFromAccountRequest };
var RemoveUserFromAccountResponse = /** @class */ (function (_super) {
    __extends(RemoveUserFromAccountResponse, _super);
    function RemoveUserFromAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemoveUserFromAccountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], RemoveUserFromAccountResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemoveUserFromAccountResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveUserFromAccount201ApplicationJson)
    ], RemoveUserFromAccountResponse.prototype, "removeUserFromAccount201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveUserFromAccount400ApplicationJson)
    ], RemoveUserFromAccountResponse.prototype, "removeUserFromAccount400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveUserFromAccount401ApplicationJson)
    ], RemoveUserFromAccountResponse.prototype, "removeUserFromAccount401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveUserFromAccount403ApplicationJson)
    ], RemoveUserFromAccountResponse.prototype, "removeUserFromAccount403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveUserFromAccount429ApplicationJson)
    ], RemoveUserFromAccountResponse.prototype, "removeUserFromAccount429ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemoveUserFromAccount500ApplicationJson)
    ], RemoveUserFromAccountResponse.prototype, "removeUserFromAccount500ApplicationJsonObject", void 0);
    return RemoveUserFromAccountResponse;
}(SpeakeasyBase));
export { RemoveUserFromAccountResponse };
