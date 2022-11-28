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
// UpsertUserRequestBodyIdentification
/**
 * User identification requires a userId, email or both
**/
var UpsertUserRequestBodyIdentification = /** @class */ (function (_super) {
    __extends(UpsertUserRequestBodyIdentification, _super);
    function UpsertUserRequestBodyIdentification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UpsertUserRequestBodyIdentification.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], UpsertUserRequestBodyIdentification.prototype, "userId", void 0);
    return UpsertUserRequestBodyIdentification;
}(SpeakeasyBase));
export { UpsertUserRequestBodyIdentification };
// UpsertUserRequestBody
/**
 * Update properties of a user
**/
var UpsertUserRequestBody = /** @class */ (function (_super) {
    __extends(UpsertUserRequestBody, _super);
    function UpsertUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identification" }),
        __metadata("design:type", UpsertUserRequestBodyIdentification)
    ], UpsertUserRequestBody.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", Map)
    ], UpsertUserRequestBody.prototype, "properties", void 0);
    return UpsertUserRequestBody;
}(SpeakeasyBase));
export { UpsertUserRequestBody };
var UpsertUser201ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(UpsertUser201ApplicationJsonMeta, _super);
    function UpsertUser201ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], UpsertUser201ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], UpsertUser201ApplicationJsonMeta.prototype, "status", void 0);
    return UpsertUser201ApplicationJsonMeta;
}(SpeakeasyBase));
export { UpsertUser201ApplicationJsonMeta };
var UpsertUser201ApplicationJson = /** @class */ (function (_super) {
    __extends(UpsertUser201ApplicationJson, _super);
    function UpsertUser201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpsertUser201ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", UpsertUser201ApplicationJsonMeta)
    ], UpsertUser201ApplicationJson.prototype, "meta", void 0);
    return UpsertUser201ApplicationJson;
}(SpeakeasyBase));
export { UpsertUser201ApplicationJson };
// UpsertUser400ApplicationJsonErrorsParameters
/**
 * All query-, header- and path- parameters that seemed incorrect
**/
var UpsertUser400ApplicationJsonErrorsParameters = /** @class */ (function (_super) {
    __extends(UpsertUser400ApplicationJsonErrorsParameters, _super);
    function UpsertUser400ApplicationJsonErrorsParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=header" }),
        __metadata("design:type", Map)
    ], UpsertUser400ApplicationJsonErrorsParameters.prototype, "header", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", Map)
    ], UpsertUser400ApplicationJsonErrorsParameters.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query" }),
        __metadata("design:type", Map)
    ], UpsertUser400ApplicationJsonErrorsParameters.prototype, "query", void 0);
    return UpsertUser400ApplicationJsonErrorsParameters;
}(SpeakeasyBase));
export { UpsertUser400ApplicationJsonErrorsParameters };
// UpsertUser400ApplicationJsonErrors
/**
 * Map that sums up all received values that seemed incorrect
**/
var UpsertUser400ApplicationJsonErrors = /** @class */ (function (_super) {
    __extends(UpsertUser400ApplicationJsonErrors, _super);
    function UpsertUser400ApplicationJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields" }),
        __metadata("design:type", Map)
    ], UpsertUser400ApplicationJsonErrors.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters" }),
        __metadata("design:type", UpsertUser400ApplicationJsonErrorsParameters)
    ], UpsertUser400ApplicationJsonErrors.prototype, "parameters", void 0);
    return UpsertUser400ApplicationJsonErrors;
}(SpeakeasyBase));
export { UpsertUser400ApplicationJsonErrors };
var UpsertUser400ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(UpsertUser400ApplicationJsonMeta, _super);
    function UpsertUser400ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], UpsertUser400ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], UpsertUser400ApplicationJsonMeta.prototype, "status", void 0);
    return UpsertUser400ApplicationJsonMeta;
}(SpeakeasyBase));
export { UpsertUser400ApplicationJsonMeta };
var UpsertUser400ApplicationJson = /** @class */ (function (_super) {
    __extends(UpsertUser400ApplicationJson, _super);
    function UpsertUser400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", UpsertUser400ApplicationJsonErrors)
    ], UpsertUser400ApplicationJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpsertUser400ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", UpsertUser400ApplicationJsonMeta)
    ], UpsertUser400ApplicationJson.prototype, "meta", void 0);
    return UpsertUser400ApplicationJson;
}(SpeakeasyBase));
export { UpsertUser400ApplicationJson };
var UpsertUser401ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(UpsertUser401ApplicationJsonMeta, _super);
    function UpsertUser401ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], UpsertUser401ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], UpsertUser401ApplicationJsonMeta.prototype, "status", void 0);
    return UpsertUser401ApplicationJsonMeta;
}(SpeakeasyBase));
export { UpsertUser401ApplicationJsonMeta };
var UpsertUser401ApplicationJson = /** @class */ (function (_super) {
    __extends(UpsertUser401ApplicationJson, _super);
    function UpsertUser401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpsertUser401ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", UpsertUser401ApplicationJsonMeta)
    ], UpsertUser401ApplicationJson.prototype, "meta", void 0);
    return UpsertUser401ApplicationJson;
}(SpeakeasyBase));
export { UpsertUser401ApplicationJson };
var UpsertUser403ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(UpsertUser403ApplicationJsonMeta, _super);
    function UpsertUser403ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], UpsertUser403ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], UpsertUser403ApplicationJsonMeta.prototype, "status", void 0);
    return UpsertUser403ApplicationJsonMeta;
}(SpeakeasyBase));
export { UpsertUser403ApplicationJsonMeta };
var UpsertUser403ApplicationJson = /** @class */ (function (_super) {
    __extends(UpsertUser403ApplicationJson, _super);
    function UpsertUser403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpsertUser403ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", UpsertUser403ApplicationJsonMeta)
    ], UpsertUser403ApplicationJson.prototype, "meta", void 0);
    return UpsertUser403ApplicationJson;
}(SpeakeasyBase));
export { UpsertUser403ApplicationJson };
var UpsertUser429ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(UpsertUser429ApplicationJsonMeta, _super);
    function UpsertUser429ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], UpsertUser429ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], UpsertUser429ApplicationJsonMeta.prototype, "status", void 0);
    return UpsertUser429ApplicationJsonMeta;
}(SpeakeasyBase));
export { UpsertUser429ApplicationJsonMeta };
var UpsertUser429ApplicationJson = /** @class */ (function (_super) {
    __extends(UpsertUser429ApplicationJson, _super);
    function UpsertUser429ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpsertUser429ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", UpsertUser429ApplicationJsonMeta)
    ], UpsertUser429ApplicationJson.prototype, "meta", void 0);
    return UpsertUser429ApplicationJson;
}(SpeakeasyBase));
export { UpsertUser429ApplicationJson };
var UpsertUser500ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(UpsertUser500ApplicationJsonMeta, _super);
    function UpsertUser500ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], UpsertUser500ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], UpsertUser500ApplicationJsonMeta.prototype, "status", void 0);
    return UpsertUser500ApplicationJsonMeta;
}(SpeakeasyBase));
export { UpsertUser500ApplicationJsonMeta };
var UpsertUser500ApplicationJson = /** @class */ (function (_super) {
    __extends(UpsertUser500ApplicationJson, _super);
    function UpsertUser500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpsertUser500ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", UpsertUser500ApplicationJsonMeta)
    ], UpsertUser500ApplicationJson.prototype, "meta", void 0);
    return UpsertUser500ApplicationJson;
}(SpeakeasyBase));
export { UpsertUser500ApplicationJson };
var UpsertUserRequest = /** @class */ (function (_super) {
    __extends(UpsertUserRequest, _super);
    function UpsertUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpsertUserRequestBody)
    ], UpsertUserRequest.prototype, "request", void 0);
    return UpsertUserRequest;
}(SpeakeasyBase));
export { UpsertUserRequest };
var UpsertUserResponse = /** @class */ (function (_super) {
    __extends(UpsertUserResponse, _super);
    function UpsertUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpsertUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpsertUserResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpsertUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpsertUser201ApplicationJson)
    ], UpsertUserResponse.prototype, "upsertUser201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpsertUser400ApplicationJson)
    ], UpsertUserResponse.prototype, "upsertUser400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpsertUser401ApplicationJson)
    ], UpsertUserResponse.prototype, "upsertUser401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpsertUser403ApplicationJson)
    ], UpsertUserResponse.prototype, "upsertUser403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpsertUser429ApplicationJson)
    ], UpsertUserResponse.prototype, "upsertUser429ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpsertUser500ApplicationJson)
    ], UpsertUserResponse.prototype, "upsertUser500ApplicationJsonObject", void 0);
    return UpsertUserResponse;
}(SpeakeasyBase));
export { UpsertUserResponse };
