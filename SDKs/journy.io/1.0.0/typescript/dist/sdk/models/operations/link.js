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
// LinkRequestBodyIdentification
/**
 * User identification requires a userId, email or both
**/
var LinkRequestBodyIdentification = /** @class */ (function (_super) {
    __extends(LinkRequestBodyIdentification, _super);
    function LinkRequestBodyIdentification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], LinkRequestBodyIdentification.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userId" }),
        __metadata("design:type", String)
    ], LinkRequestBodyIdentification.prototype, "userId", void 0);
    return LinkRequestBodyIdentification;
}(SpeakeasyBase));
export { LinkRequestBodyIdentification };
// LinkRequestBody
/**
 * Link web activity to user
**/
var LinkRequestBody = /** @class */ (function (_super) {
    __extends(LinkRequestBody, _super);
    function LinkRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceId" }),
        __metadata("design:type", String)
    ], LinkRequestBody.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identification" }),
        __metadata("design:type", LinkRequestBodyIdentification)
    ], LinkRequestBody.prototype, "identification", void 0);
    return LinkRequestBody;
}(SpeakeasyBase));
export { LinkRequestBody };
var Link201ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(Link201ApplicationJsonMeta, _super);
    function Link201ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], Link201ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], Link201ApplicationJsonMeta.prototype, "status", void 0);
    return Link201ApplicationJsonMeta;
}(SpeakeasyBase));
export { Link201ApplicationJsonMeta };
var Link201ApplicationJson = /** @class */ (function (_super) {
    __extends(Link201ApplicationJson, _super);
    function Link201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], Link201ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", Link201ApplicationJsonMeta)
    ], Link201ApplicationJson.prototype, "meta", void 0);
    return Link201ApplicationJson;
}(SpeakeasyBase));
export { Link201ApplicationJson };
// Link400ApplicationJsonErrorsParameters
/**
 * All query-, header- and path- parameters that seemed incorrect
**/
var Link400ApplicationJsonErrorsParameters = /** @class */ (function (_super) {
    __extends(Link400ApplicationJsonErrorsParameters, _super);
    function Link400ApplicationJsonErrorsParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=header" }),
        __metadata("design:type", Map)
    ], Link400ApplicationJsonErrorsParameters.prototype, "header", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", Map)
    ], Link400ApplicationJsonErrorsParameters.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query" }),
        __metadata("design:type", Map)
    ], Link400ApplicationJsonErrorsParameters.prototype, "query", void 0);
    return Link400ApplicationJsonErrorsParameters;
}(SpeakeasyBase));
export { Link400ApplicationJsonErrorsParameters };
// Link400ApplicationJsonErrors
/**
 * Map that sums up all received values that seemed incorrect
**/
var Link400ApplicationJsonErrors = /** @class */ (function (_super) {
    __extends(Link400ApplicationJsonErrors, _super);
    function Link400ApplicationJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields" }),
        __metadata("design:type", Map)
    ], Link400ApplicationJsonErrors.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters" }),
        __metadata("design:type", Link400ApplicationJsonErrorsParameters)
    ], Link400ApplicationJsonErrors.prototype, "parameters", void 0);
    return Link400ApplicationJsonErrors;
}(SpeakeasyBase));
export { Link400ApplicationJsonErrors };
var Link400ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(Link400ApplicationJsonMeta, _super);
    function Link400ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], Link400ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], Link400ApplicationJsonMeta.prototype, "status", void 0);
    return Link400ApplicationJsonMeta;
}(SpeakeasyBase));
export { Link400ApplicationJsonMeta };
var Link400ApplicationJson = /** @class */ (function (_super) {
    __extends(Link400ApplicationJson, _super);
    function Link400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Link400ApplicationJsonErrors)
    ], Link400ApplicationJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], Link400ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", Link400ApplicationJsonMeta)
    ], Link400ApplicationJson.prototype, "meta", void 0);
    return Link400ApplicationJson;
}(SpeakeasyBase));
export { Link400ApplicationJson };
var Link401ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(Link401ApplicationJsonMeta, _super);
    function Link401ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], Link401ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], Link401ApplicationJsonMeta.prototype, "status", void 0);
    return Link401ApplicationJsonMeta;
}(SpeakeasyBase));
export { Link401ApplicationJsonMeta };
var Link401ApplicationJson = /** @class */ (function (_super) {
    __extends(Link401ApplicationJson, _super);
    function Link401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], Link401ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", Link401ApplicationJsonMeta)
    ], Link401ApplicationJson.prototype, "meta", void 0);
    return Link401ApplicationJson;
}(SpeakeasyBase));
export { Link401ApplicationJson };
var Link403ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(Link403ApplicationJsonMeta, _super);
    function Link403ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], Link403ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], Link403ApplicationJsonMeta.prototype, "status", void 0);
    return Link403ApplicationJsonMeta;
}(SpeakeasyBase));
export { Link403ApplicationJsonMeta };
var Link403ApplicationJson = /** @class */ (function (_super) {
    __extends(Link403ApplicationJson, _super);
    function Link403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], Link403ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", Link403ApplicationJsonMeta)
    ], Link403ApplicationJson.prototype, "meta", void 0);
    return Link403ApplicationJson;
}(SpeakeasyBase));
export { Link403ApplicationJson };
var Link429ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(Link429ApplicationJsonMeta, _super);
    function Link429ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], Link429ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], Link429ApplicationJsonMeta.prototype, "status", void 0);
    return Link429ApplicationJsonMeta;
}(SpeakeasyBase));
export { Link429ApplicationJsonMeta };
var Link429ApplicationJson = /** @class */ (function (_super) {
    __extends(Link429ApplicationJson, _super);
    function Link429ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], Link429ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", Link429ApplicationJsonMeta)
    ], Link429ApplicationJson.prototype, "meta", void 0);
    return Link429ApplicationJson;
}(SpeakeasyBase));
export { Link429ApplicationJson };
var Link500ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(Link500ApplicationJsonMeta, _super);
    function Link500ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], Link500ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], Link500ApplicationJsonMeta.prototype, "status", void 0);
    return Link500ApplicationJsonMeta;
}(SpeakeasyBase));
export { Link500ApplicationJsonMeta };
var Link500ApplicationJson = /** @class */ (function (_super) {
    __extends(Link500ApplicationJson, _super);
    function Link500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], Link500ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", Link500ApplicationJsonMeta)
    ], Link500ApplicationJson.prototype, "meta", void 0);
    return Link500ApplicationJson;
}(SpeakeasyBase));
export { Link500ApplicationJson };
var LinkRequest = /** @class */ (function (_super) {
    __extends(LinkRequest, _super);
    function LinkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", LinkRequestBody)
    ], LinkRequest.prototype, "request", void 0);
    return LinkRequest;
}(SpeakeasyBase));
export { LinkRequest };
var LinkResponse = /** @class */ (function (_super) {
    __extends(LinkResponse, _super);
    function LinkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LinkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], LinkResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LinkResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Link201ApplicationJson)
    ], LinkResponse.prototype, "link201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Link400ApplicationJson)
    ], LinkResponse.prototype, "link400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Link401ApplicationJson)
    ], LinkResponse.prototype, "link401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Link403ApplicationJson)
    ], LinkResponse.prototype, "link403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Link429ApplicationJson)
    ], LinkResponse.prototype, "link429ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Link500ApplicationJson)
    ], LinkResponse.prototype, "link500ApplicationJsonObject", void 0);
    return LinkResponse;
}(SpeakeasyBase));
export { LinkResponse };
