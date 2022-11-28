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
// GetValidity200ApplicationJsonData
/**
 * Validation of API Key
**/
var GetValidity200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetValidity200ApplicationJsonData, _super);
    function GetValidity200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permissions" }),
        __metadata("design:type", Array)
    ], GetValidity200ApplicationJsonData.prototype, "permissions", void 0);
    return GetValidity200ApplicationJsonData;
}(SpeakeasyBase));
export { GetValidity200ApplicationJsonData };
var GetValidity200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(GetValidity200ApplicationJsonMeta, _super);
    function GetValidity200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], GetValidity200ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetValidity200ApplicationJsonMeta.prototype, "status", void 0);
    return GetValidity200ApplicationJsonMeta;
}(SpeakeasyBase));
export { GetValidity200ApplicationJsonMeta };
var GetValidity200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetValidity200ApplicationJson, _super);
    function GetValidity200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetValidity200ApplicationJsonData)
    ], GetValidity200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetValidity200ApplicationJsonMeta)
    ], GetValidity200ApplicationJson.prototype, "meta", void 0);
    return GetValidity200ApplicationJson;
}(SpeakeasyBase));
export { GetValidity200ApplicationJson };
var GetValidity401ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(GetValidity401ApplicationJsonMeta, _super);
    function GetValidity401ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], GetValidity401ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetValidity401ApplicationJsonMeta.prototype, "status", void 0);
    return GetValidity401ApplicationJsonMeta;
}(SpeakeasyBase));
export { GetValidity401ApplicationJsonMeta };
var GetValidity401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetValidity401ApplicationJson, _super);
    function GetValidity401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetValidity401ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetValidity401ApplicationJsonMeta)
    ], GetValidity401ApplicationJson.prototype, "meta", void 0);
    return GetValidity401ApplicationJson;
}(SpeakeasyBase));
export { GetValidity401ApplicationJson };
var GetValidity403ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(GetValidity403ApplicationJsonMeta, _super);
    function GetValidity403ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], GetValidity403ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetValidity403ApplicationJsonMeta.prototype, "status", void 0);
    return GetValidity403ApplicationJsonMeta;
}(SpeakeasyBase));
export { GetValidity403ApplicationJsonMeta };
var GetValidity403ApplicationJson = /** @class */ (function (_super) {
    __extends(GetValidity403ApplicationJson, _super);
    function GetValidity403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetValidity403ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetValidity403ApplicationJsonMeta)
    ], GetValidity403ApplicationJson.prototype, "meta", void 0);
    return GetValidity403ApplicationJson;
}(SpeakeasyBase));
export { GetValidity403ApplicationJson };
var GetValidity429ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(GetValidity429ApplicationJsonMeta, _super);
    function GetValidity429ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], GetValidity429ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetValidity429ApplicationJsonMeta.prototype, "status", void 0);
    return GetValidity429ApplicationJsonMeta;
}(SpeakeasyBase));
export { GetValidity429ApplicationJsonMeta };
var GetValidity429ApplicationJson = /** @class */ (function (_super) {
    __extends(GetValidity429ApplicationJson, _super);
    function GetValidity429ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetValidity429ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetValidity429ApplicationJsonMeta)
    ], GetValidity429ApplicationJson.prototype, "meta", void 0);
    return GetValidity429ApplicationJson;
}(SpeakeasyBase));
export { GetValidity429ApplicationJson };
var GetValidity500ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(GetValidity500ApplicationJsonMeta, _super);
    function GetValidity500ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestId" }),
        __metadata("design:type", String)
    ], GetValidity500ApplicationJsonMeta.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", Number)
    ], GetValidity500ApplicationJsonMeta.prototype, "status", void 0);
    return GetValidity500ApplicationJsonMeta;
}(SpeakeasyBase));
export { GetValidity500ApplicationJsonMeta };
var GetValidity500ApplicationJson = /** @class */ (function (_super) {
    __extends(GetValidity500ApplicationJson, _super);
    function GetValidity500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetValidity500ApplicationJson.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetValidity500ApplicationJsonMeta)
    ], GetValidity500ApplicationJson.prototype, "meta", void 0);
    return GetValidity500ApplicationJson;
}(SpeakeasyBase));
export { GetValidity500ApplicationJson };
var GetValidityResponse = /** @class */ (function (_super) {
    __extends(GetValidityResponse, _super);
    function GetValidityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetValidityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetValidityResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetValidityResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetValidity200ApplicationJson)
    ], GetValidityResponse.prototype, "getValidity200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetValidity401ApplicationJson)
    ], GetValidityResponse.prototype, "getValidity401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetValidity403ApplicationJson)
    ], GetValidityResponse.prototype, "getValidity403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetValidity429ApplicationJson)
    ], GetValidityResponse.prototype, "getValidity429ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetValidity500ApplicationJson)
    ], GetValidityResponse.prototype, "getValidity500ApplicationJsonObject", void 0);
    return GetValidityResponse;
}(SpeakeasyBase));
export { GetValidityResponse };
