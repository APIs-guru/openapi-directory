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
var AddUserToAccountPathParams = /** @class */ (function (_super) {
    __extends(AddUserToAccountPathParams, _super);
    function AddUserToAccountPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AddUserToAccountPathParams.prototype, "accountId", void 0);
    return AddUserToAccountPathParams;
}(SpeakeasyBase));
export { AddUserToAccountPathParams };
// AddUserToAccountRequestBody
/**
 * The user being added/removed from the account
**/
var AddUserToAccountRequestBody = /** @class */ (function (_super) {
    __extends(AddUserToAccountRequestBody, _super);
    function AddUserToAccountRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], AddUserToAccountRequestBody.prototype, "userId", void 0);
    return AddUserToAccountRequestBody;
}(SpeakeasyBase));
export { AddUserToAccountRequestBody };
var AddUserToAccount201ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(AddUserToAccount201ApplicationJsonMeta, _super);
    function AddUserToAccount201ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], AddUserToAccount201ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], AddUserToAccount201ApplicationJsonMeta.prototype, "status", void 0);
    return AddUserToAccount201ApplicationJsonMeta;
}(SpeakeasyBase));
export { AddUserToAccount201ApplicationJsonMeta };
var AddUserToAccount201ApplicationJson = /** @class */ (function (_super) {
    __extends(AddUserToAccount201ApplicationJson, _super);
    function AddUserToAccount201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AddUserToAccount201ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", AddUserToAccount201ApplicationJsonMeta)
    ], AddUserToAccount201ApplicationJson.prototype, "meta", void 0);
    return AddUserToAccount201ApplicationJson;
}(SpeakeasyBase));
export { AddUserToAccount201ApplicationJson };
// AddUserToAccount400ApplicationJsonErrorsParameters
/**
 * All query-, header- and path- parameters that seemed incorrect
**/
var AddUserToAccount400ApplicationJsonErrorsParameters = /** @class */ (function (_super) {
    __extends(AddUserToAccount400ApplicationJsonErrorsParameters, _super);
    function AddUserToAccount400ApplicationJsonErrorsParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=header" }),
        __metadata("design:type", Map)
    ], AddUserToAccount400ApplicationJsonErrorsParameters.prototype, "header", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", Map)
    ], AddUserToAccount400ApplicationJsonErrorsParameters.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query" }),
        __metadata("design:type", Map)
    ], AddUserToAccount400ApplicationJsonErrorsParameters.prototype, "query", void 0);
    return AddUserToAccount400ApplicationJsonErrorsParameters;
}(SpeakeasyBase));
export { AddUserToAccount400ApplicationJsonErrorsParameters };
// AddUserToAccount400ApplicationJsonErrors
/**
 * Map that sums up all received values that seemed incorrect
**/
var AddUserToAccount400ApplicationJsonErrors = /** @class */ (function (_super) {
    __extends(AddUserToAccount400ApplicationJsonErrors, _super);
    function AddUserToAccount400ApplicationJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields" }),
        __metadata("design:type", Map)
    ], AddUserToAccount400ApplicationJsonErrors.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters" }),
        __metadata("design:type", AddUserToAccount400ApplicationJsonErrorsParameters)
    ], AddUserToAccount400ApplicationJsonErrors.prototype, "parameters", void 0);
    return AddUserToAccount400ApplicationJsonErrors;
}(SpeakeasyBase));
export { AddUserToAccount400ApplicationJsonErrors };
var AddUserToAccount400ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(AddUserToAccount400ApplicationJsonMeta, _super);
    function AddUserToAccount400ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], AddUserToAccount400ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], AddUserToAccount400ApplicationJsonMeta.prototype, "status", void 0);
    return AddUserToAccount400ApplicationJsonMeta;
}(SpeakeasyBase));
export { AddUserToAccount400ApplicationJsonMeta };
var AddUserToAccount400ApplicationJson = /** @class */ (function (_super) {
    __extends(AddUserToAccount400ApplicationJson, _super);
    function AddUserToAccount400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", AddUserToAccount400ApplicationJsonErrors)
    ], AddUserToAccount400ApplicationJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AddUserToAccount400ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", AddUserToAccount400ApplicationJsonMeta)
    ], AddUserToAccount400ApplicationJson.prototype, "meta", void 0);
    return AddUserToAccount400ApplicationJson;
}(SpeakeasyBase));
export { AddUserToAccount400ApplicationJson };
var AddUserToAccount401ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(AddUserToAccount401ApplicationJsonMeta, _super);
    function AddUserToAccount401ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], AddUserToAccount401ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], AddUserToAccount401ApplicationJsonMeta.prototype, "status", void 0);
    return AddUserToAccount401ApplicationJsonMeta;
}(SpeakeasyBase));
export { AddUserToAccount401ApplicationJsonMeta };
var AddUserToAccount401ApplicationJson = /** @class */ (function (_super) {
    __extends(AddUserToAccount401ApplicationJson, _super);
    function AddUserToAccount401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AddUserToAccount401ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", AddUserToAccount401ApplicationJsonMeta)
    ], AddUserToAccount401ApplicationJson.prototype, "meta", void 0);
    return AddUserToAccount401ApplicationJson;
}(SpeakeasyBase));
export { AddUserToAccount401ApplicationJson };
var AddUserToAccount429ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(AddUserToAccount429ApplicationJsonMeta, _super);
    function AddUserToAccount429ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], AddUserToAccount429ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], AddUserToAccount429ApplicationJsonMeta.prototype, "status", void 0);
    return AddUserToAccount429ApplicationJsonMeta;
}(SpeakeasyBase));
export { AddUserToAccount429ApplicationJsonMeta };
var AddUserToAccount429ApplicationJson = /** @class */ (function (_super) {
    __extends(AddUserToAccount429ApplicationJson, _super);
    function AddUserToAccount429ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AddUserToAccount429ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", AddUserToAccount429ApplicationJsonMeta)
    ], AddUserToAccount429ApplicationJson.prototype, "meta", void 0);
    return AddUserToAccount429ApplicationJson;
}(SpeakeasyBase));
export { AddUserToAccount429ApplicationJson };
var AddUserToAccount500ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(AddUserToAccount500ApplicationJsonMeta, _super);
    function AddUserToAccount500ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], AddUserToAccount500ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], AddUserToAccount500ApplicationJsonMeta.prototype, "status", void 0);
    return AddUserToAccount500ApplicationJsonMeta;
}(SpeakeasyBase));
export { AddUserToAccount500ApplicationJsonMeta };
var AddUserToAccount500ApplicationJson = /** @class */ (function (_super) {
    __extends(AddUserToAccount500ApplicationJson, _super);
    function AddUserToAccount500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], AddUserToAccount500ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", AddUserToAccount500ApplicationJsonMeta)
    ], AddUserToAccount500ApplicationJson.prototype, "meta", void 0);
    return AddUserToAccount500ApplicationJson;
}(SpeakeasyBase));
export { AddUserToAccount500ApplicationJson };
var AddUserToAccountRequest = /** @class */ (function (_super) {
    __extends(AddUserToAccountRequest, _super);
    function AddUserToAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddUserToAccountPathParams)
    ], AddUserToAccountRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddUserToAccountRequestBody)
    ], AddUserToAccountRequest.prototype, "request", void 0);
    return AddUserToAccountRequest;
}(SpeakeasyBase));
export { AddUserToAccountRequest };
var AddUserToAccountResponse = /** @class */ (function (_super) {
    __extends(AddUserToAccountResponse, _super);
    function AddUserToAccountResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddUserToAccountResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AddUserToAccountResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddUserToAccountResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddUserToAccount201ApplicationJson)
    ], AddUserToAccountResponse.prototype, "addUserToAccount201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddUserToAccount400ApplicationJson)
    ], AddUserToAccountResponse.prototype, "addUserToAccount400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddUserToAccount401ApplicationJson)
    ], AddUserToAccountResponse.prototype, "addUserToAccount401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddUserToAccount429ApplicationJson)
    ], AddUserToAccountResponse.prototype, "addUserToAccount429ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddUserToAccount500ApplicationJson)
    ], AddUserToAccountResponse.prototype, "addUserToAccount500ApplicationJsonObject", void 0);
    return AddUserToAccountResponse;
}(SpeakeasyBase));
export { AddUserToAccountResponse };
