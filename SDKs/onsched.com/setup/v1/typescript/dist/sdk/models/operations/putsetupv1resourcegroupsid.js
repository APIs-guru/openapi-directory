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
var PutSetupV1ResourcegroupsIdPathParams = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcegroupsIdPathParams, _super);
    function PutSetupV1ResourcegroupsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutSetupV1ResourcegroupsIdPathParams.prototype, "id", void 0);
    return PutSetupV1ResourcegroupsIdPathParams;
}(SpeakeasyBase));
export { PutSetupV1ResourcegroupsIdPathParams };
var PutSetupV1ResourcegroupsIdRequests = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcegroupsIdRequests, _super);
    function PutSetupV1ResourcegroupsIdRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ResourceGroupUpdateModel)
    ], PutSetupV1ResourcegroupsIdRequests.prototype, "resourceGroupUpdateModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ResourceGroupUpdateModel)
    ], PutSetupV1ResourcegroupsIdRequests.prototype, "resourceGroupUpdateModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.ResourceGroupUpdateModel)
    ], PutSetupV1ResourcegroupsIdRequests.prototype, "resourceGroupUpdateModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ResourceGroupUpdateModel)
    ], PutSetupV1ResourcegroupsIdRequests.prototype, "resourceGroupUpdateModel3", void 0);
    return PutSetupV1ResourcegroupsIdRequests;
}(SpeakeasyBase));
export { PutSetupV1ResourcegroupsIdRequests };
var PutSetupV1ResourcegroupsIdRequest = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcegroupsIdRequest, _super);
    function PutSetupV1ResourcegroupsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1ResourcegroupsIdPathParams)
    ], PutSetupV1ResourcegroupsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1ResourcegroupsIdRequests)
    ], PutSetupV1ResourcegroupsIdRequest.prototype, "request", void 0);
    return PutSetupV1ResourcegroupsIdRequest;
}(SpeakeasyBase));
export { PutSetupV1ResourcegroupsIdRequest };
var PutSetupV1ResourcegroupsIdResponse = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcegroupsIdResponse, _super);
    function PutSetupV1ResourcegroupsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSetupV1ResourcegroupsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceGroupViewModel)
    ], PutSetupV1ResourcegroupsIdResponse.prototype, "resourceGroupViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSetupV1ResourcegroupsIdResponse.prototype, "statusCode", void 0);
    return PutSetupV1ResourcegroupsIdResponse;
}(SpeakeasyBase));
export { PutSetupV1ResourcegroupsIdResponse };
