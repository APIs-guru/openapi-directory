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
var PostOwnershipOwnershipIdPathParams = /** @class */ (function (_super) {
    __extends(PostOwnershipOwnershipIdPathParams, _super);
    function PostOwnershipOwnershipIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ownershipId" }),
        __metadata("design:type", String)
    ], PostOwnershipOwnershipIdPathParams.prototype, "ownershipId", void 0);
    return PostOwnershipOwnershipIdPathParams;
}(SpeakeasyBase));
export { PostOwnershipOwnershipIdPathParams };
var PostOwnershipOwnershipIdQueryParams = /** @class */ (function (_super) {
    __extends(PostOwnershipOwnershipIdQueryParams, _super);
    function PostOwnershipOwnershipIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=customData" }),
        __metadata("design:type", String)
    ], PostOwnershipOwnershipIdQueryParams.prototype, "customData", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=expires" }),
        __metadata("design:type", Number)
    ], PostOwnershipOwnershipIdQueryParams.prototype, "expires", void 0);
    return PostOwnershipOwnershipIdQueryParams;
}(SpeakeasyBase));
export { PostOwnershipOwnershipIdQueryParams };
var PostOwnershipOwnershipIdRequest = /** @class */ (function (_super) {
    __extends(PostOwnershipOwnershipIdRequest, _super);
    function PostOwnershipOwnershipIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostOwnershipOwnershipIdPathParams)
    ], PostOwnershipOwnershipIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostOwnershipOwnershipIdQueryParams)
    ], PostOwnershipOwnershipIdRequest.prototype, "queryParams", void 0);
    return PostOwnershipOwnershipIdRequest;
}(SpeakeasyBase));
export { PostOwnershipOwnershipIdRequest };
var PostOwnershipOwnershipIdResponse = /** @class */ (function (_super) {
    __extends(PostOwnershipOwnershipIdResponse, _super);
    function PostOwnershipOwnershipIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostOwnershipOwnershipIdResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostOwnershipOwnershipIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostOwnershipOwnershipIdResponse.prototype, "statusCode", void 0);
    return PostOwnershipOwnershipIdResponse;
}(SpeakeasyBase));
export { PostOwnershipOwnershipIdResponse };
