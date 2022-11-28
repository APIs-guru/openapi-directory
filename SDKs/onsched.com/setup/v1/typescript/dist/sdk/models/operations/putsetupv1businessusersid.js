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
var PutSetupV1BusinessusersIdPathParams = /** @class */ (function (_super) {
    __extends(PutSetupV1BusinessusersIdPathParams, _super);
    function PutSetupV1BusinessusersIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutSetupV1BusinessusersIdPathParams.prototype, "id", void 0);
    return PutSetupV1BusinessusersIdPathParams;
}(SpeakeasyBase));
export { PutSetupV1BusinessusersIdPathParams };
var PutSetupV1BusinessusersIdRequests = /** @class */ (function (_super) {
    __extends(PutSetupV1BusinessusersIdRequests, _super);
    function PutSetupV1BusinessusersIdRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.BusinessUserUpdateModel)
    ], PutSetupV1BusinessusersIdRequests.prototype, "businessUserUpdateModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BusinessUserUpdateModel)
    ], PutSetupV1BusinessusersIdRequests.prototype, "businessUserUpdateModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.BusinessUserUpdateModel)
    ], PutSetupV1BusinessusersIdRequests.prototype, "businessUserUpdateModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.BusinessUserUpdateModel)
    ], PutSetupV1BusinessusersIdRequests.prototype, "businessUserUpdateModel3", void 0);
    return PutSetupV1BusinessusersIdRequests;
}(SpeakeasyBase));
export { PutSetupV1BusinessusersIdRequests };
var PutSetupV1BusinessusersIdRequest = /** @class */ (function (_super) {
    __extends(PutSetupV1BusinessusersIdRequest, _super);
    function PutSetupV1BusinessusersIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1BusinessusersIdPathParams)
    ], PutSetupV1BusinessusersIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1BusinessusersIdRequests)
    ], PutSetupV1BusinessusersIdRequest.prototype, "request", void 0);
    return PutSetupV1BusinessusersIdRequest;
}(SpeakeasyBase));
export { PutSetupV1BusinessusersIdRequest };
var PutSetupV1BusinessusersIdResponse = /** @class */ (function (_super) {
    __extends(PutSetupV1BusinessusersIdResponse, _super);
    function PutSetupV1BusinessusersIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BusinessUserViewModel)
    ], PutSetupV1BusinessusersIdResponse.prototype, "businessUserViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSetupV1BusinessusersIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSetupV1BusinessusersIdResponse.prototype, "statusCode", void 0);
    return PutSetupV1BusinessusersIdResponse;
}(SpeakeasyBase));
export { PutSetupV1BusinessusersIdResponse };
