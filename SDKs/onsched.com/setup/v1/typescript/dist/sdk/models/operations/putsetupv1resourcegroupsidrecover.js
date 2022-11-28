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
var PutSetupV1ResourcegroupsIdRecoverPathParams = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcegroupsIdRecoverPathParams, _super);
    function PutSetupV1ResourcegroupsIdRecoverPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutSetupV1ResourcegroupsIdRecoverPathParams.prototype, "id", void 0);
    return PutSetupV1ResourcegroupsIdRecoverPathParams;
}(SpeakeasyBase));
export { PutSetupV1ResourcegroupsIdRecoverPathParams };
var PutSetupV1ResourcegroupsIdRecoverRequest = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcegroupsIdRecoverRequest, _super);
    function PutSetupV1ResourcegroupsIdRecoverRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1ResourcegroupsIdRecoverPathParams)
    ], PutSetupV1ResourcegroupsIdRecoverRequest.prototype, "pathParams", void 0);
    return PutSetupV1ResourcegroupsIdRecoverRequest;
}(SpeakeasyBase));
export { PutSetupV1ResourcegroupsIdRecoverRequest };
var PutSetupV1ResourcegroupsIdRecoverResponse = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcegroupsIdRecoverResponse, _super);
    function PutSetupV1ResourcegroupsIdRecoverResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSetupV1ResourcegroupsIdRecoverResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceViewModel)
    ], PutSetupV1ResourcegroupsIdRecoverResponse.prototype, "resourceViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSetupV1ResourcegroupsIdRecoverResponse.prototype, "statusCode", void 0);
    return PutSetupV1ResourcegroupsIdRecoverResponse;
}(SpeakeasyBase));
export { PutSetupV1ResourcegroupsIdRecoverResponse };
