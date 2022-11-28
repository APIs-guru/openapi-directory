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
var GetTrackingSnippetQueryParams = /** @class */ (function (_super) {
    __extends(GetTrackingSnippetQueryParams, _super);
    function GetTrackingSnippetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain" }),
        __metadata("design:type", String)
    ], GetTrackingSnippetQueryParams.prototype, "domain", void 0);
    return GetTrackingSnippetQueryParams;
}(SpeakeasyBase));
export { GetTrackingSnippetQueryParams };
// GetTrackingSnippet200ApplicationJsonData
/**
 * A snippet
**/
var GetTrackingSnippet200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetTrackingSnippet200ApplicationJsonData, _super);
    function GetTrackingSnippet200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], GetTrackingSnippet200ApplicationJsonData.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snippet" }),
        __metadata("design:type", String)
    ], GetTrackingSnippet200ApplicationJsonData.prototype, "snippet", void 0);
    return GetTrackingSnippet200ApplicationJsonData;
}(SpeakeasyBase));
export { GetTrackingSnippet200ApplicationJsonData };
var GetTrackingSnippet200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(GetTrackingSnippet200ApplicationJsonMeta, _super);
    function GetTrackingSnippet200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], GetTrackingSnippet200ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetTrackingSnippet200ApplicationJsonMeta.prototype, "status", void 0);
    return GetTrackingSnippet200ApplicationJsonMeta;
}(SpeakeasyBase));
export { GetTrackingSnippet200ApplicationJsonMeta };
var GetTrackingSnippet200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTrackingSnippet200ApplicationJson, _super);
    function GetTrackingSnippet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetTrackingSnippet200ApplicationJsonData)
    ], GetTrackingSnippet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetTrackingSnippet200ApplicationJsonMeta)
    ], GetTrackingSnippet200ApplicationJson.prototype, "meta", void 0);
    return GetTrackingSnippet200ApplicationJson;
}(SpeakeasyBase));
export { GetTrackingSnippet200ApplicationJson };
// GetTrackingSnippet400ApplicationJsonErrorsParameters
/**
 * All query-, header- and path- parameters that seemed incorrect
**/
var GetTrackingSnippet400ApplicationJsonErrorsParameters = /** @class */ (function (_super) {
    __extends(GetTrackingSnippet400ApplicationJsonErrorsParameters, _super);
    function GetTrackingSnippet400ApplicationJsonErrorsParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=header" }),
        __metadata("design:type", Map)
    ], GetTrackingSnippet400ApplicationJsonErrorsParameters.prototype, "header", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", Map)
    ], GetTrackingSnippet400ApplicationJsonErrorsParameters.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query" }),
        __metadata("design:type", Map)
    ], GetTrackingSnippet400ApplicationJsonErrorsParameters.prototype, "query", void 0);
    return GetTrackingSnippet400ApplicationJsonErrorsParameters;
}(SpeakeasyBase));
export { GetTrackingSnippet400ApplicationJsonErrorsParameters };
// GetTrackingSnippet400ApplicationJsonErrors
/**
 * Map that sums up all received values that seemed incorrect
**/
var GetTrackingSnippet400ApplicationJsonErrors = /** @class */ (function (_super) {
    __extends(GetTrackingSnippet400ApplicationJsonErrors, _super);
    function GetTrackingSnippet400ApplicationJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields" }),
        __metadata("design:type", Map)
    ], GetTrackingSnippet400ApplicationJsonErrors.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters" }),
        __metadata("design:type", GetTrackingSnippet400ApplicationJsonErrorsParameters)
    ], GetTrackingSnippet400ApplicationJsonErrors.prototype, "parameters", void 0);
    return GetTrackingSnippet400ApplicationJsonErrors;
}(SpeakeasyBase));
export { GetTrackingSnippet400ApplicationJsonErrors };
var GetTrackingSnippet400ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(GetTrackingSnippet400ApplicationJsonMeta, _super);
    function GetTrackingSnippet400ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], GetTrackingSnippet400ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetTrackingSnippet400ApplicationJsonMeta.prototype, "status", void 0);
    return GetTrackingSnippet400ApplicationJsonMeta;
}(SpeakeasyBase));
export { GetTrackingSnippet400ApplicationJsonMeta };
var GetTrackingSnippet400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTrackingSnippet400ApplicationJson, _super);
    function GetTrackingSnippet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", GetTrackingSnippet400ApplicationJsonErrors)
    ], GetTrackingSnippet400ApplicationJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetTrackingSnippet400ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetTrackingSnippet400ApplicationJsonMeta)
    ], GetTrackingSnippet400ApplicationJson.prototype, "meta", void 0);
    return GetTrackingSnippet400ApplicationJson;
}(SpeakeasyBase));
export { GetTrackingSnippet400ApplicationJson };
var GetTrackingSnippet401ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(GetTrackingSnippet401ApplicationJsonMeta, _super);
    function GetTrackingSnippet401ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], GetTrackingSnippet401ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetTrackingSnippet401ApplicationJsonMeta.prototype, "status", void 0);
    return GetTrackingSnippet401ApplicationJsonMeta;
}(SpeakeasyBase));
export { GetTrackingSnippet401ApplicationJsonMeta };
var GetTrackingSnippet401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTrackingSnippet401ApplicationJson, _super);
    function GetTrackingSnippet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetTrackingSnippet401ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetTrackingSnippet401ApplicationJsonMeta)
    ], GetTrackingSnippet401ApplicationJson.prototype, "meta", void 0);
    return GetTrackingSnippet401ApplicationJson;
}(SpeakeasyBase));
export { GetTrackingSnippet401ApplicationJson };
var GetTrackingSnippet403ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(GetTrackingSnippet403ApplicationJsonMeta, _super);
    function GetTrackingSnippet403ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], GetTrackingSnippet403ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetTrackingSnippet403ApplicationJsonMeta.prototype, "status", void 0);
    return GetTrackingSnippet403ApplicationJsonMeta;
}(SpeakeasyBase));
export { GetTrackingSnippet403ApplicationJsonMeta };
var GetTrackingSnippet403ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTrackingSnippet403ApplicationJson, _super);
    function GetTrackingSnippet403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetTrackingSnippet403ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetTrackingSnippet403ApplicationJsonMeta)
    ], GetTrackingSnippet403ApplicationJson.prototype, "meta", void 0);
    return GetTrackingSnippet403ApplicationJson;
}(SpeakeasyBase));
export { GetTrackingSnippet403ApplicationJson };
var GetTrackingSnippet404ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(GetTrackingSnippet404ApplicationJsonMeta, _super);
    function GetTrackingSnippet404ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], GetTrackingSnippet404ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetTrackingSnippet404ApplicationJsonMeta.prototype, "status", void 0);
    return GetTrackingSnippet404ApplicationJsonMeta;
}(SpeakeasyBase));
export { GetTrackingSnippet404ApplicationJsonMeta };
var GetTrackingSnippet404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTrackingSnippet404ApplicationJson, _super);
    function GetTrackingSnippet404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetTrackingSnippet404ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetTrackingSnippet404ApplicationJsonMeta)
    ], GetTrackingSnippet404ApplicationJson.prototype, "meta", void 0);
    return GetTrackingSnippet404ApplicationJson;
}(SpeakeasyBase));
export { GetTrackingSnippet404ApplicationJson };
var GetTrackingSnippet429ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(GetTrackingSnippet429ApplicationJsonMeta, _super);
    function GetTrackingSnippet429ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], GetTrackingSnippet429ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetTrackingSnippet429ApplicationJsonMeta.prototype, "status", void 0);
    return GetTrackingSnippet429ApplicationJsonMeta;
}(SpeakeasyBase));
export { GetTrackingSnippet429ApplicationJsonMeta };
var GetTrackingSnippet429ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTrackingSnippet429ApplicationJson, _super);
    function GetTrackingSnippet429ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetTrackingSnippet429ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetTrackingSnippet429ApplicationJsonMeta)
    ], GetTrackingSnippet429ApplicationJson.prototype, "meta", void 0);
    return GetTrackingSnippet429ApplicationJson;
}(SpeakeasyBase));
export { GetTrackingSnippet429ApplicationJson };
var GetTrackingSnippet500ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(GetTrackingSnippet500ApplicationJsonMeta, _super);
    function GetTrackingSnippet500ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], GetTrackingSnippet500ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetTrackingSnippet500ApplicationJsonMeta.prototype, "status", void 0);
    return GetTrackingSnippet500ApplicationJsonMeta;
}(SpeakeasyBase));
export { GetTrackingSnippet500ApplicationJsonMeta };
var GetTrackingSnippet500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTrackingSnippet500ApplicationJson, _super);
    function GetTrackingSnippet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetTrackingSnippet500ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetTrackingSnippet500ApplicationJsonMeta)
    ], GetTrackingSnippet500ApplicationJson.prototype, "meta", void 0);
    return GetTrackingSnippet500ApplicationJson;
}(SpeakeasyBase));
export { GetTrackingSnippet500ApplicationJson };
var GetTrackingSnippetRequest = /** @class */ (function (_super) {
    __extends(GetTrackingSnippetRequest, _super);
    function GetTrackingSnippetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTrackingSnippetQueryParams)
    ], GetTrackingSnippetRequest.prototype, "queryParams", void 0);
    return GetTrackingSnippetRequest;
}(SpeakeasyBase));
export { GetTrackingSnippetRequest };
var GetTrackingSnippetResponse = /** @class */ (function (_super) {
    __extends(GetTrackingSnippetResponse, _super);
    function GetTrackingSnippetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTrackingSnippetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTrackingSnippetResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTrackingSnippetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTrackingSnippet200ApplicationJson)
    ], GetTrackingSnippetResponse.prototype, "getTrackingSnippet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTrackingSnippet400ApplicationJson)
    ], GetTrackingSnippetResponse.prototype, "getTrackingSnippet400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTrackingSnippet401ApplicationJson)
    ], GetTrackingSnippetResponse.prototype, "getTrackingSnippet401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTrackingSnippet403ApplicationJson)
    ], GetTrackingSnippetResponse.prototype, "getTrackingSnippet403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTrackingSnippet404ApplicationJson)
    ], GetTrackingSnippetResponse.prototype, "getTrackingSnippet404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTrackingSnippet429ApplicationJson)
    ], GetTrackingSnippetResponse.prototype, "getTrackingSnippet429ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTrackingSnippet500ApplicationJson)
    ], GetTrackingSnippetResponse.prototype, "getTrackingSnippet500ApplicationJsonObject", void 0);
    return GetTrackingSnippetResponse;
}(SpeakeasyBase));
export { GetTrackingSnippetResponse };
