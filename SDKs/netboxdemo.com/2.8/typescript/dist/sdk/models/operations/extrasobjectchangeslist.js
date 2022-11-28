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
var ExtrasObjectChangesListQueryParams = /** @class */ (function (_super) {
    __extends(ExtrasObjectChangesListQueryParams, _super);
    function ExtrasObjectChangesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action__n" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "actionN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changed_object_id" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "changedObjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changed_object_id__gt" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "changedObjectIdGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changed_object_id__gte" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "changedObjectIdGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changed_object_id__lt" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "changedObjectIdLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changed_object_id__lte" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "changedObjectIdLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changed_object_id__n" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "changedObjectIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changed_object_type" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "changedObjectType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=changed_object_type__n" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "changedObjectTypeN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gt" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "idGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gte" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "idGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lt" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "idLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lte" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "idLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__n" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "idN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ExtrasObjectChangesListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_repr" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "objectRepr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_repr__ic" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "objectReprIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_repr__ie" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "objectReprIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_repr__iew" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "objectReprIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_repr__isw" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "objectReprIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_repr__n" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "objectReprN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_repr__nic" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "objectReprNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_repr__nie" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "objectReprNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_repr__niew" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "objectReprNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_repr__nisw" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "objectReprNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ExtrasObjectChangesListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=request_id" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "time", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "user", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user__n" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "userN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "userName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name__ic" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "userNameIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name__ie" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "userNameIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name__iew" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "userNameIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name__isw" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "userNameIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name__n" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "userNameN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name__nic" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "userNameNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name__nie" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "userNameNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name__niew" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "userNameNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_name__nisw" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListQueryParams.prototype, "userNameNisw", void 0);
    return ExtrasObjectChangesListQueryParams;
}(SpeakeasyBase));
export { ExtrasObjectChangesListQueryParams };
var ExtrasObjectChangesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(ExtrasObjectChangesList200ApplicationJson, _super);
    function ExtrasObjectChangesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], ExtrasObjectChangesList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], ExtrasObjectChangesList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.ObjectChange }),
        __metadata("design:type", Array)
    ], ExtrasObjectChangesList200ApplicationJson.prototype, "results", void 0);
    return ExtrasObjectChangesList200ApplicationJson;
}(SpeakeasyBase));
export { ExtrasObjectChangesList200ApplicationJson };
var ExtrasObjectChangesListRequest = /** @class */ (function (_super) {
    __extends(ExtrasObjectChangesListRequest, _super);
    function ExtrasObjectChangesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExtrasObjectChangesListQueryParams)
    ], ExtrasObjectChangesListRequest.prototype, "queryParams", void 0);
    return ExtrasObjectChangesListRequest;
}(SpeakeasyBase));
export { ExtrasObjectChangesListRequest };
var ExtrasObjectChangesListResponse = /** @class */ (function (_super) {
    __extends(ExtrasObjectChangesListResponse, _super);
    function ExtrasObjectChangesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExtrasObjectChangesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ExtrasObjectChangesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExtrasObjectChangesList200ApplicationJson)
    ], ExtrasObjectChangesListResponse.prototype, "extrasObjectChangesList200ApplicationJsonObject", void 0);
    return ExtrasObjectChangesListResponse;
}(SpeakeasyBase));
export { ExtrasObjectChangesListResponse };
