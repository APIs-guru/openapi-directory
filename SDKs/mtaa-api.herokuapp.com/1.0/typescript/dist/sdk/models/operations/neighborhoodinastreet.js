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
var NeighborhoodInAStreetPathParams = /** @class */ (function (_super) {
    __extends(NeighborhoodInAStreetPathParams, _super);
    function NeighborhoodInAStreetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" }),
        __metadata("design:type", String)
    ], NeighborhoodInAStreetPathParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=district" }),
        __metadata("design:type", String)
    ], NeighborhoodInAStreetPathParams.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=region" }),
        __metadata("design:type", String)
    ], NeighborhoodInAStreetPathParams.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=street" }),
        __metadata("design:type", String)
    ], NeighborhoodInAStreetPathParams.prototype, "street", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ward" }),
        __metadata("design:type", String)
    ], NeighborhoodInAStreetPathParams.prototype, "ward", void 0);
    return NeighborhoodInAStreetPathParams;
}(SpeakeasyBase));
export { NeighborhoodInAStreetPathParams };
var NeighborhoodInAStreetRequest = /** @class */ (function (_super) {
    __extends(NeighborhoodInAStreetRequest, _super);
    function NeighborhoodInAStreetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", NeighborhoodInAStreetPathParams)
    ], NeighborhoodInAStreetRequest.prototype, "pathParams", void 0);
    return NeighborhoodInAStreetRequest;
}(SpeakeasyBase));
export { NeighborhoodInAStreetRequest };
var NeighborhoodInAStreetResponse = /** @class */ (function (_super) {
    __extends(NeighborhoodInAStreetResponse, _super);
    function NeighborhoodInAStreetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], NeighborhoodInAStreetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], NeighborhoodInAStreetResponse.prototype, "statusCode", void 0);
    return NeighborhoodInAStreetResponse;
}(SpeakeasyBase));
export { NeighborhoodInAStreetResponse };
