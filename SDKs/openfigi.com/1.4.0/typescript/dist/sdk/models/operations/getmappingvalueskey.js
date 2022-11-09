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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var GetMappingValuesKeyKeyEnum;
(function (GetMappingValuesKeyKeyEnum) {
    GetMappingValuesKeyKeyEnum["IdType"] = "idType";
    GetMappingValuesKeyKeyEnum["ExchCode"] = "exchCode";
    GetMappingValuesKeyKeyEnum["MicCode"] = "micCode";
    GetMappingValuesKeyKeyEnum["Currency"] = "currency";
    GetMappingValuesKeyKeyEnum["MarketSecDes"] = "marketSecDes";
    GetMappingValuesKeyKeyEnum["SecurityType"] = "securityType";
    GetMappingValuesKeyKeyEnum["SecurityType2"] = "securityType2";
})(GetMappingValuesKeyKeyEnum || (GetMappingValuesKeyKeyEnum = {}));
var GetMappingValuesKeyPathParams = /** @class */ (function (_super) {
    __extends(GetMappingValuesKeyPathParams, _super);
    function GetMappingValuesKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=key" }),
        __metadata("design:type", String)
    ], GetMappingValuesKeyPathParams.prototype, "key", void 0);
    return GetMappingValuesKeyPathParams;
}(SpeakeasyBase));
export { GetMappingValuesKeyPathParams };
var GetMappingValuesKeyRequest = /** @class */ (function (_super) {
    __extends(GetMappingValuesKeyRequest, _super);
    function GetMappingValuesKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetMappingValuesKeyPathParams)
    ], GetMappingValuesKeyRequest.prototype, "pathParams", void 0);
    return GetMappingValuesKeyRequest;
}(SpeakeasyBase));
export { GetMappingValuesKeyRequest };
var GetMappingValuesKey200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetMappingValuesKey200ApplicationJson, _super);
    function GetMappingValuesKey200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=values" }),
        __metadata("design:type", Array)
    ], GetMappingValuesKey200ApplicationJson.prototype, "values", void 0);
    return GetMappingValuesKey200ApplicationJson;
}(SpeakeasyBase));
export { GetMappingValuesKey200ApplicationJson };
var GetMappingValuesKeyResponse = /** @class */ (function (_super) {
    __extends(GetMappingValuesKeyResponse, _super);
    function GetMappingValuesKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetMappingValuesKeyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetMappingValuesKey200ApplicationJson)
    ], GetMappingValuesKeyResponse.prototype, "getMappingValuesKey200ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetMappingValuesKeyResponse.prototype, "getMappingValuesKey400WildcardString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetMappingValuesKeyResponse.prototype, "getMappingValuesKey500WildcardString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetMappingValuesKeyResponse.prototype, "statusCode", void 0);
    return GetMappingValuesKeyResponse;
}(SpeakeasyBase));
export { GetMappingValuesKeyResponse };
