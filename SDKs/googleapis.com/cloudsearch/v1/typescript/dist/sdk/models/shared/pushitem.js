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
import { RepositoryError } from "./repositoryerror";
export var PushItemTypeEnum;
(function (PushItemTypeEnum) {
    PushItemTypeEnum["Unspecified"] = "UNSPECIFIED";
    PushItemTypeEnum["Modified"] = "MODIFIED";
    PushItemTypeEnum["NotModified"] = "NOT_MODIFIED";
    PushItemTypeEnum["RepositoryError"] = "REPOSITORY_ERROR";
    PushItemTypeEnum["Requeue"] = "REQUEUE";
})(PushItemTypeEnum || (PushItemTypeEnum = {}));
// PushItem
/**
 * Represents an item to be pushed to the indexing queue.
**/
var PushItem = /** @class */ (function (_super) {
    __extends(PushItem, _super);
    function PushItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentHash" }),
        __metadata("design:type", String)
    ], PushItem.prototype, "contentHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadataHash" }),
        __metadata("design:type", String)
    ], PushItem.prototype, "metadataHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payload" }),
        __metadata("design:type", String)
    ], PushItem.prototype, "payload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=queue" }),
        __metadata("design:type", String)
    ], PushItem.prototype, "queue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=repositoryError" }),
        __metadata("design:type", RepositoryError)
    ], PushItem.prototype, "repositoryError", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=structuredDataHash" }),
        __metadata("design:type", String)
    ], PushItem.prototype, "structuredDataHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PushItem.prototype, "type", void 0);
    return PushItem;
}(SpeakeasyBase));
export { PushItem };
