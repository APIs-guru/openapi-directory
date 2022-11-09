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
var GetStorageCommitmentIdPathParams = /** @class */ (function (_super) {
    __extends(GetStorageCommitmentIdPathParams, _super);
    function GetStorageCommitmentIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetStorageCommitmentIdPathParams.prototype, "id", void 0);
    return GetStorageCommitmentIdPathParams;
}(SpeakeasyBase));
export { GetStorageCommitmentIdPathParams };
var GetStorageCommitmentIdRequest = /** @class */ (function (_super) {
    __extends(GetStorageCommitmentIdRequest, _super);
    function GetStorageCommitmentIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetStorageCommitmentIdPathParams)
    ], GetStorageCommitmentIdRequest.prototype, "pathParams", void 0);
    return GetStorageCommitmentIdRequest;
}(SpeakeasyBase));
export { GetStorageCommitmentIdRequest };
var GetStorageCommitmentIdResponse = /** @class */ (function (_super) {
    __extends(GetStorageCommitmentIdResponse, _super);
    function GetStorageCommitmentIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetStorageCommitmentIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], GetStorageCommitmentIdResponse.prototype, "getStorageCommitmentId200ApplicationJsonAny", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetStorageCommitmentIdResponse.prototype, "statusCode", void 0);
    return GetStorageCommitmentIdResponse;
}(SpeakeasyBase));
export { GetStorageCommitmentIdResponse };
