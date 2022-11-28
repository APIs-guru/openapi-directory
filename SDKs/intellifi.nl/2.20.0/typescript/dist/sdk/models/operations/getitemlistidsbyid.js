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
var GetItemListIdsByIdPathParams = /** @class */ (function (_super) {
    __extends(GetItemListIdsByIdPathParams, _super);
    function GetItemListIdsByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetItemListIdsByIdPathParams.prototype, "id", void 0);
    return GetItemListIdsByIdPathParams;
}(SpeakeasyBase));
export { GetItemListIdsByIdPathParams };
var GetItemListIdsByIdRequest = /** @class */ (function (_super) {
    __extends(GetItemListIdsByIdRequest, _super);
    function GetItemListIdsByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetItemListIdsByIdPathParams)
    ], GetItemListIdsByIdRequest.prototype, "pathParams", void 0);
    return GetItemListIdsByIdRequest;
}(SpeakeasyBase));
export { GetItemListIdsByIdRequest };
var GetItemListIdsByIdResponse = /** @class */ (function (_super) {
    __extends(GetItemListIdsByIdResponse, _super);
    function GetItemListIdsByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetItemListIdsByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GetItemListIdsByIdResponse.prototype, "listOfItemIds", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetItemListIdsByIdResponse.prototype, "statusCode", void 0);
    return GetItemListIdsByIdResponse;
}(SpeakeasyBase));
export { GetItemListIdsByIdResponse };
