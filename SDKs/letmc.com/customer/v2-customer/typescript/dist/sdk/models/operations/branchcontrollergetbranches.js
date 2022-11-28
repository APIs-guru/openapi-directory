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
import * as shared from "../shared";
var BranchControllerGetBranchesPathParams = /** @class */ (function (_super) {
    __extends(BranchControllerGetBranchesPathParams, _super);
    function BranchControllerGetBranchesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" }),
        __metadata("design:type", String)
    ], BranchControllerGetBranchesPathParams.prototype, "shortName", void 0);
    return BranchControllerGetBranchesPathParams;
}(SpeakeasyBase));
export { BranchControllerGetBranchesPathParams };
var BranchControllerGetBranchesQueryParams = /** @class */ (function (_super) {
    __extends(BranchControllerGetBranchesQueryParams, _super);
    function BranchControllerGetBranchesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" }),
        __metadata("design:type", Number)
    ], BranchControllerGetBranchesQueryParams.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], BranchControllerGetBranchesQueryParams.prototype, "offset", void 0);
    return BranchControllerGetBranchesQueryParams;
}(SpeakeasyBase));
export { BranchControllerGetBranchesQueryParams };
var BranchControllerGetBranchesRequest = /** @class */ (function (_super) {
    __extends(BranchControllerGetBranchesRequest, _super);
    function BranchControllerGetBranchesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BranchControllerGetBranchesPathParams)
    ], BranchControllerGetBranchesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BranchControllerGetBranchesQueryParams)
    ], BranchControllerGetBranchesRequest.prototype, "queryParams", void 0);
    return BranchControllerGetBranchesRequest;
}(SpeakeasyBase));
export { BranchControllerGetBranchesRequest };
var BranchControllerGetBranchesResponse = /** @class */ (function (_super) {
    __extends(BranchControllerGetBranchesResponse, _super);
    function BranchControllerGetBranchesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], BranchControllerGetBranchesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BranchModelResults)
    ], BranchControllerGetBranchesResponse.prototype, "branchModelResults", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BranchControllerGetBranchesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BranchControllerGetBranchesResponse.prototype, "statusCode", void 0);
    return BranchControllerGetBranchesResponse;
}(SpeakeasyBase));
export { BranchControllerGetBranchesResponse };
