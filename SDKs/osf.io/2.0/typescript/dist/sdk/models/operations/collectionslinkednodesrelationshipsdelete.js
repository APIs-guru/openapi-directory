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
var CollectionsLinkedNodesRelationshipsDeletePathParams = /** @class */ (function (_super) {
    __extends(CollectionsLinkedNodesRelationshipsDeletePathParams, _super);
    function CollectionsLinkedNodesRelationshipsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_id" }),
        __metadata("design:type", String)
    ], CollectionsLinkedNodesRelationshipsDeletePathParams.prototype, "collectionId", void 0);
    return CollectionsLinkedNodesRelationshipsDeletePathParams;
}(SpeakeasyBase));
export { CollectionsLinkedNodesRelationshipsDeletePathParams };
var CollectionsLinkedNodesRelationshipsDeleteRequest = /** @class */ (function (_super) {
    __extends(CollectionsLinkedNodesRelationshipsDeleteRequest, _super);
    function CollectionsLinkedNodesRelationshipsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CollectionsLinkedNodesRelationshipsDeletePathParams)
    ], CollectionsLinkedNodesRelationshipsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], CollectionsLinkedNodesRelationshipsDeleteRequest.prototype, "request", void 0);
    return CollectionsLinkedNodesRelationshipsDeleteRequest;
}(SpeakeasyBase));
export { CollectionsLinkedNodesRelationshipsDeleteRequest };
var CollectionsLinkedNodesRelationshipsDeleteResponse = /** @class */ (function (_super) {
    __extends(CollectionsLinkedNodesRelationshipsDeleteResponse, _super);
    function CollectionsLinkedNodesRelationshipsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CollectionsLinkedNodesRelationshipsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CollectionsLinkedNodesRelationshipsDeleteResponse.prototype, "statusCode", void 0);
    return CollectionsLinkedNodesRelationshipsDeleteResponse;
}(SpeakeasyBase));
export { CollectionsLinkedNodesRelationshipsDeleteResponse };
