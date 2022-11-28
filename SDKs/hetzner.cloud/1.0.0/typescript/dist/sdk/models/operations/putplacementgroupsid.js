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
var PutPlacementGroupsIdPathParams = /** @class */ (function (_super) {
    __extends(PutPlacementGroupsIdPathParams, _super);
    function PutPlacementGroupsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PutPlacementGroupsIdPathParams.prototype, "id", void 0);
    return PutPlacementGroupsIdPathParams;
}(SpeakeasyBase));
export { PutPlacementGroupsIdPathParams };
var PutPlacementGroupsIdUpdatePlacementGroupRequest = /** @class */ (function (_super) {
    __extends(PutPlacementGroupsIdUpdatePlacementGroupRequest, _super);
    function PutPlacementGroupsIdUpdatePlacementGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PutPlacementGroupsIdUpdatePlacementGroupRequest.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutPlacementGroupsIdUpdatePlacementGroupRequest.prototype, "name", void 0);
    return PutPlacementGroupsIdUpdatePlacementGroupRequest;
}(SpeakeasyBase));
export { PutPlacementGroupsIdUpdatePlacementGroupRequest };
export var PutPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum;
(function (PutPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum) {
    PutPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum["Spread"] = "spread";
})(PutPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum || (PutPlacementGroupsIdPlacementGroupResponsePlacementGroupTypeEnum = {}));
var PutPlacementGroupsIdPlacementGroupResponsePlacementGroup = /** @class */ (function (_super) {
    __extends(PutPlacementGroupsIdPlacementGroupResponsePlacementGroup, _super);
    function PutPlacementGroupsIdPlacementGroupResponsePlacementGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], PutPlacementGroupsIdPlacementGroupResponsePlacementGroup.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutPlacementGroupsIdPlacementGroupResponsePlacementGroup.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PutPlacementGroupsIdPlacementGroupResponsePlacementGroup.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutPlacementGroupsIdPlacementGroupResponsePlacementGroup.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servers" }),
        __metadata("design:type", Array)
    ], PutPlacementGroupsIdPlacementGroupResponsePlacementGroup.prototype, "servers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PutPlacementGroupsIdPlacementGroupResponsePlacementGroup.prototype, "type", void 0);
    return PutPlacementGroupsIdPlacementGroupResponsePlacementGroup;
}(SpeakeasyBase));
export { PutPlacementGroupsIdPlacementGroupResponsePlacementGroup };
var PutPlacementGroupsIdPlacementGroupResponse = /** @class */ (function (_super) {
    __extends(PutPlacementGroupsIdPlacementGroupResponse, _super);
    function PutPlacementGroupsIdPlacementGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placement_group" }),
        __metadata("design:type", PutPlacementGroupsIdPlacementGroupResponsePlacementGroup)
    ], PutPlacementGroupsIdPlacementGroupResponse.prototype, "placementGroup", void 0);
    return PutPlacementGroupsIdPlacementGroupResponse;
}(SpeakeasyBase));
export { PutPlacementGroupsIdPlacementGroupResponse };
var PutPlacementGroupsIdRequest = /** @class */ (function (_super) {
    __extends(PutPlacementGroupsIdRequest, _super);
    function PutPlacementGroupsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutPlacementGroupsIdPathParams)
    ], PutPlacementGroupsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutPlacementGroupsIdUpdatePlacementGroupRequest)
    ], PutPlacementGroupsIdRequest.prototype, "request", void 0);
    return PutPlacementGroupsIdRequest;
}(SpeakeasyBase));
export { PutPlacementGroupsIdRequest };
var PutPlacementGroupsIdResponse = /** @class */ (function (_super) {
    __extends(PutPlacementGroupsIdResponse, _super);
    function PutPlacementGroupsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutPlacementGroupsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutPlacementGroupsIdPlacementGroupResponse)
    ], PutPlacementGroupsIdResponse.prototype, "placementGroupResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutPlacementGroupsIdResponse.prototype, "statusCode", void 0);
    return PutPlacementGroupsIdResponse;
}(SpeakeasyBase));
export { PutPlacementGroupsIdResponse };
