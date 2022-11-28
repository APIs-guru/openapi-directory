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
var DeleteNetworkPiiRequestPathParams = /** @class */ (function (_super) {
    __extends(DeleteNetworkPiiRequestPathParams, _super);
    function DeleteNetworkPiiRequestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], DeleteNetworkPiiRequestPathParams.prototype, "networkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=requestId" }),
        __metadata("design:type", String)
    ], DeleteNetworkPiiRequestPathParams.prototype, "requestId", void 0);
    return DeleteNetworkPiiRequestPathParams;
}(SpeakeasyBase));
export { DeleteNetworkPiiRequestPathParams };
var DeleteNetworkPiiRequestRequest = /** @class */ (function (_super) {
    __extends(DeleteNetworkPiiRequestRequest, _super);
    function DeleteNetworkPiiRequestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteNetworkPiiRequestPathParams)
    ], DeleteNetworkPiiRequestRequest.prototype, "pathParams", void 0);
    return DeleteNetworkPiiRequestRequest;
}(SpeakeasyBase));
export { DeleteNetworkPiiRequestRequest };
var DeleteNetworkPiiRequestResponse = /** @class */ (function (_super) {
    __extends(DeleteNetworkPiiRequestResponse, _super);
    function DeleteNetworkPiiRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteNetworkPiiRequestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteNetworkPiiRequestResponse.prototype, "statusCode", void 0);
    return DeleteNetworkPiiRequestResponse;
}(SpeakeasyBase));
export { DeleteNetworkPiiRequestResponse };
