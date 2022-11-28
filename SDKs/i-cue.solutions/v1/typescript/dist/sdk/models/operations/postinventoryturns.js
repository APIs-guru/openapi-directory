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
var PostInventoryTurnsHeaders = /** @class */ (function (_super) {
    __extends(PostInventoryTurnsHeaders, _super);
    function PostInventoryTurnsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" }),
        __metadata("design:type", String)
    ], PostInventoryTurnsHeaders.prototype, "token", void 0);
    return PostInventoryTurnsHeaders;
}(SpeakeasyBase));
export { PostInventoryTurnsHeaders };
var PostInventoryTurnsRequest = /** @class */ (function (_super) {
    __extends(PostInventoryTurnsRequest, _super);
    function PostInventoryTurnsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostInventoryTurnsHeaders)
    ], PostInventoryTurnsRequest.prototype, "headers", void 0);
    return PostInventoryTurnsRequest;
}(SpeakeasyBase));
export { PostInventoryTurnsRequest };
var PostInventoryTurnsResponse = /** @class */ (function (_super) {
    __extends(PostInventoryTurnsResponse, _super);
    function PostInventoryTurnsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostInventoryTurnsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostInventoryTurnsResponse.prototype, "statusCode", void 0);
    return PostInventoryTurnsResponse;
}(SpeakeasyBase));
export { PostInventoryTurnsResponse };
