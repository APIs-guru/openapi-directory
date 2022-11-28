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
var GetMarketdataExchangeComponents200ApplicationJsonMapping = /** @class */ (function (_super) {
    __extends(GetMarketdataExchangeComponents200ApplicationJsonMapping, _super);
    function GetMarketdataExchangeComponents200ApplicationJsonMapping() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bit" }),
        __metadata("design:type", Number)
    ], GetMarketdataExchangeComponents200ApplicationJsonMapping.prototype, "bit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetMarketdataExchangeComponents200ApplicationJsonMapping.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exchange" }),
        __metadata("design:type", String)
    ], GetMarketdataExchangeComponents200ApplicationJsonMapping.prototype, "exchange", void 0);
    return GetMarketdataExchangeComponents200ApplicationJsonMapping;
}(SpeakeasyBase));
export { GetMarketdataExchangeComponents200ApplicationJsonMapping };
var GetMarketdataExchangeComponents200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetMarketdataExchangeComponents200ApplicationJson, _super);
    function GetMarketdataExchangeComponents200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Complete" }),
        __metadata("design:type", Boolean)
    ], GetMarketdataExchangeComponents200ApplicationJson.prototype, "complete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConId" }),
        __metadata("design:type", Number)
    ], GetMarketdataExchangeComponents200ApplicationJson.prototype, "conId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mapping", elemType: GetMarketdataExchangeComponents200ApplicationJsonMapping }),
        __metadata("design:type", Array)
    ], GetMarketdataExchangeComponents200ApplicationJson.prototype, "mapping", void 0);
    return GetMarketdataExchangeComponents200ApplicationJson;
}(SpeakeasyBase));
export { GetMarketdataExchangeComponents200ApplicationJson };
var GetMarketdataExchangeComponentsResponse = /** @class */ (function (_super) {
    __extends(GetMarketdataExchangeComponentsResponse, _super);
    function GetMarketdataExchangeComponentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMarketdataExchangeComponentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: GetMarketdataExchangeComponents200ApplicationJson }),
        __metadata("design:type", Array)
    ], GetMarketdataExchangeComponentsResponse.prototype, "getMarketdataExchangeComponents200ApplicationJsonObjects", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMarketdataExchangeComponentsResponse.prototype, "statusCode", void 0);
    return GetMarketdataExchangeComponentsResponse;
}(SpeakeasyBase));
export { GetMarketdataExchangeComponentsResponse };
