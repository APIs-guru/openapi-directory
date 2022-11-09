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
var GetTargetExpressionByEnsgidQueryParams = /** @class */ (function (_super) {
    __extends(GetTargetExpressionByEnsgidQueryParams, _super);
    function GetTargetExpressionByEnsgidQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=gene" }),
        __metadata("design:type", String)
    ], GetTargetExpressionByEnsgidQueryParams.prototype, "gene", void 0);
    return GetTargetExpressionByEnsgidQueryParams;
}(SpeakeasyBase));
export { GetTargetExpressionByEnsgidQueryParams };
var GetTargetExpressionByEnsgidRequest = /** @class */ (function (_super) {
    __extends(GetTargetExpressionByEnsgidRequest, _super);
    function GetTargetExpressionByEnsgidRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetTargetExpressionByEnsgidQueryParams)
    ], GetTargetExpressionByEnsgidRequest.prototype, "queryParams", void 0);
    return GetTargetExpressionByEnsgidRequest;
}(SpeakeasyBase));
export { GetTargetExpressionByEnsgidRequest };
var GetTargetExpressionByEnsgidResponse = /** @class */ (function (_super) {
    __extends(GetTargetExpressionByEnsgidResponse, _super);
    function GetTargetExpressionByEnsgidResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetTargetExpressionByEnsgidResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetTargetExpressionByEnsgidResponse.prototype, "statusCode", void 0);
    return GetTargetExpressionByEnsgidResponse;
}(SpeakeasyBase));
export { GetTargetExpressionByEnsgidResponse };
