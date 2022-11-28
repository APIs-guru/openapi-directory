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
var DeleteLoadBalancersIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteLoadBalancersIdPathParams, _super);
    function DeleteLoadBalancersIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], DeleteLoadBalancersIdPathParams.prototype, "id", void 0);
    return DeleteLoadBalancersIdPathParams;
}(SpeakeasyBase));
export { DeleteLoadBalancersIdPathParams };
var DeleteLoadBalancersIdRequest = /** @class */ (function (_super) {
    __extends(DeleteLoadBalancersIdRequest, _super);
    function DeleteLoadBalancersIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteLoadBalancersIdPathParams)
    ], DeleteLoadBalancersIdRequest.prototype, "pathParams", void 0);
    return DeleteLoadBalancersIdRequest;
}(SpeakeasyBase));
export { DeleteLoadBalancersIdRequest };
var DeleteLoadBalancersIdResponse = /** @class */ (function (_super) {
    __extends(DeleteLoadBalancersIdResponse, _super);
    function DeleteLoadBalancersIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteLoadBalancersIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteLoadBalancersIdResponse.prototype, "statusCode", void 0);
    return DeleteLoadBalancersIdResponse;
}(SpeakeasyBase));
export { DeleteLoadBalancersIdResponse };
