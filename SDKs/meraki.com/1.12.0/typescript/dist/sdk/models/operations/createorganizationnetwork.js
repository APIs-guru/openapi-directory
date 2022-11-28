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
var CreateOrganizationNetworkPathParams = /** @class */ (function (_super) {
    __extends(CreateOrganizationNetworkPathParams, _super);
    function CreateOrganizationNetworkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], CreateOrganizationNetworkPathParams.prototype, "organizationId", void 0);
    return CreateOrganizationNetworkPathParams;
}(SpeakeasyBase));
export { CreateOrganizationNetworkPathParams };
export var CreateOrganizationNetworkRequestBodyProductTypesEnum;
(function (CreateOrganizationNetworkRequestBodyProductTypesEnum) {
    CreateOrganizationNetworkRequestBodyProductTypesEnum["Wireless"] = "wireless";
    CreateOrganizationNetworkRequestBodyProductTypesEnum["Appliance"] = "appliance";
    CreateOrganizationNetworkRequestBodyProductTypesEnum["Switch"] = "switch";
    CreateOrganizationNetworkRequestBodyProductTypesEnum["SystemsManager"] = "systemsManager";
    CreateOrganizationNetworkRequestBodyProductTypesEnum["Camera"] = "camera";
    CreateOrganizationNetworkRequestBodyProductTypesEnum["CellularGateway"] = "cellularGateway";
    CreateOrganizationNetworkRequestBodyProductTypesEnum["Sensor"] = "sensor";
    CreateOrganizationNetworkRequestBodyProductTypesEnum["Environmental"] = "environmental";
})(CreateOrganizationNetworkRequestBodyProductTypesEnum || (CreateOrganizationNetworkRequestBodyProductTypesEnum = {}));
var CreateOrganizationNetworkRequestBody = /** @class */ (function (_super) {
    __extends(CreateOrganizationNetworkRequestBody, _super);
    function CreateOrganizationNetworkRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyFromNetworkId" }),
        __metadata("design:type", String)
    ], CreateOrganizationNetworkRequestBody.prototype, "copyFromNetworkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateOrganizationNetworkRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], CreateOrganizationNetworkRequestBody.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productTypes" }),
        __metadata("design:type", Array)
    ], CreateOrganizationNetworkRequestBody.prototype, "productTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], CreateOrganizationNetworkRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], CreateOrganizationNetworkRequestBody.prototype, "timeZone", void 0);
    return CreateOrganizationNetworkRequestBody;
}(SpeakeasyBase));
export { CreateOrganizationNetworkRequestBody };
var CreateOrganizationNetworkRequest = /** @class */ (function (_super) {
    __extends(CreateOrganizationNetworkRequest, _super);
    function CreateOrganizationNetworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateOrganizationNetworkPathParams)
    ], CreateOrganizationNetworkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateOrganizationNetworkRequestBody)
    ], CreateOrganizationNetworkRequest.prototype, "request", void 0);
    return CreateOrganizationNetworkRequest;
}(SpeakeasyBase));
export { CreateOrganizationNetworkRequest };
var CreateOrganizationNetworkResponse = /** @class */ (function (_super) {
    __extends(CreateOrganizationNetworkResponse, _super);
    function CreateOrganizationNetworkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateOrganizationNetworkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateOrganizationNetworkResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateOrganizationNetworkResponse.prototype, "createOrganizationNetwork201ApplicationJsonObject", void 0);
    return CreateOrganizationNetworkResponse;
}(SpeakeasyBase));
export { CreateOrganizationNetworkResponse };
