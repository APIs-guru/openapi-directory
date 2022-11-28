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
var StreetsInAWardPathParams = /** @class */ (function (_super) {
    __extends(StreetsInAWardPathParams, _super);
    function StreetsInAWardPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" }),
        __metadata("design:type", String)
    ], StreetsInAWardPathParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=district" }),
        __metadata("design:type", String)
    ], StreetsInAWardPathParams.prototype, "district", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=region" }),
        __metadata("design:type", String)
    ], StreetsInAWardPathParams.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ward" }),
        __metadata("design:type", String)
    ], StreetsInAWardPathParams.prototype, "ward", void 0);
    return StreetsInAWardPathParams;
}(SpeakeasyBase));
export { StreetsInAWardPathParams };
var StreetsInAWardRequest = /** @class */ (function (_super) {
    __extends(StreetsInAWardRequest, _super);
    function StreetsInAWardRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StreetsInAWardPathParams)
    ], StreetsInAWardRequest.prototype, "pathParams", void 0);
    return StreetsInAWardRequest;
}(SpeakeasyBase));
export { StreetsInAWardRequest };
var StreetsInAWardResponse = /** @class */ (function (_super) {
    __extends(StreetsInAWardResponse, _super);
    function StreetsInAWardResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StreetsInAWardResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StreetsInAWardResponse.prototype, "statusCode", void 0);
    return StreetsInAWardResponse;
}(SpeakeasyBase));
export { StreetsInAWardResponse };
