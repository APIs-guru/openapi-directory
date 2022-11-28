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
var GetzipcodeinfoQueryParams = /** @class */ (function (_super) {
    __extends(GetzipcodeinfoQueryParams, _super);
    function GetzipcodeinfoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" }),
        __metadata("design:type", String)
    ], GetzipcodeinfoQueryParams.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" }),
        __metadata("design:type", String)
    ], GetzipcodeinfoQueryParams.prototype, "zip", void 0);
    return GetzipcodeinfoQueryParams;
}(SpeakeasyBase));
export { GetzipcodeinfoQueryParams };
var Getzipcodeinfo200ApplicationJson = /** @class */ (function (_super) {
    __extends(Getzipcodeinfo200ApplicationJson, _super);
    function Getzipcodeinfo200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AreaSquareMiles" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJson.prototype, "areaSquareMiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=City" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJson.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJson.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Credits" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJson.prototype, "credits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ElderlyHouseholdPercent" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJson.prototype, "elderlyHouseholdPercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FarmerHouseholdPercent" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJson.prototype, "farmerHouseholdPercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncomePercent100k" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJson.prototype, "incomePercent100k", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncomePercent200k" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJson.prototype, "incomePercent200k", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncomePercent50k" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJson.prototype, "incomePercent50k", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Latitude" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJson.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Longitude" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJson.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MarriedHouseholdPercent" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJson.prototype, "marriedHouseholdPercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Population" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJson.prototype, "population", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJson.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ZipCode" }),
        __metadata("design:type", String)
    ], Getzipcodeinfo200ApplicationJson.prototype, "zipCode", void 0);
    return Getzipcodeinfo200ApplicationJson;
}(SpeakeasyBase));
export { Getzipcodeinfo200ApplicationJson };
var GetzipcodeinfoRequest = /** @class */ (function (_super) {
    __extends(GetzipcodeinfoRequest, _super);
    function GetzipcodeinfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetzipcodeinfoQueryParams)
    ], GetzipcodeinfoRequest.prototype, "queryParams", void 0);
    return GetzipcodeinfoRequest;
}(SpeakeasyBase));
export { GetzipcodeinfoRequest };
var GetzipcodeinfoResponse = /** @class */ (function (_super) {
    __extends(GetzipcodeinfoResponse, _super);
    function GetzipcodeinfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetzipcodeinfoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetzipcodeinfoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Getzipcodeinfo200ApplicationJson)
    ], GetzipcodeinfoResponse.prototype, "getzipcodeinfo200ApplicationJsonObject", void 0);
    return GetzipcodeinfoResponse;
}(SpeakeasyBase));
export { GetzipcodeinfoResponse };
