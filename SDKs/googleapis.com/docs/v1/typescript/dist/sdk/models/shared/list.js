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
import { ListProperties } from "./listproperties";
import { SuggestedListProperties } from "./suggestedlistproperties";
// List
/**
 * A List represents the list attributes for a group of paragraphs that all belong to the same list. A paragraph that's part of a list has a reference to the list's ID in its bullet.
**/
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listProperties" }),
        __metadata("design:type", ListProperties)
    ], List.prototype, "listProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedDeletionIds" }),
        __metadata("design:type", Array)
    ], List.prototype, "suggestedDeletionIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedInsertionId" }),
        __metadata("design:type", String)
    ], List.prototype, "suggestedInsertionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedListPropertiesChanges", elemType: SuggestedListProperties }),
        __metadata("design:type", Map)
    ], List.prototype, "suggestedListPropertiesChanges", void 0);
    return List;
}(SpeakeasyBase));
export { List };
