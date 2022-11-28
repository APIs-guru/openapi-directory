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
import { GoogleCloudDialogflowV2EntityTypeEntity } from "./googleclouddialogflowv2entitytypeentity";
export var GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum;
(function (GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum) {
    GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum["AutoExpansionModeUnspecified"] = "AUTO_EXPANSION_MODE_UNSPECIFIED";
    GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum["AutoExpansionModeDefault"] = "AUTO_EXPANSION_MODE_DEFAULT";
})(GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum || (GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum = {}));
export var GoogleCloudDialogflowV2EntityTypeKindEnum;
(function (GoogleCloudDialogflowV2EntityTypeKindEnum) {
    GoogleCloudDialogflowV2EntityTypeKindEnum["KindUnspecified"] = "KIND_UNSPECIFIED";
    GoogleCloudDialogflowV2EntityTypeKindEnum["KindMap"] = "KIND_MAP";
    GoogleCloudDialogflowV2EntityTypeKindEnum["KindList"] = "KIND_LIST";
    GoogleCloudDialogflowV2EntityTypeKindEnum["KindRegexp"] = "KIND_REGEXP";
})(GoogleCloudDialogflowV2EntityTypeKindEnum || (GoogleCloudDialogflowV2EntityTypeKindEnum = {}));
// GoogleCloudDialogflowV2EntityType
/**
 * Each intent parameter has a type, called the entity type, which dictates exactly how data from an end-user expression is extracted. Dialogflow provides predefined system entities that can match many common types of data. For example, there are system entities for matching dates, times, colors, email addresses, and so on. You can also create your own custom entities for matching custom data. For example, you could define a vegetable entity that can match the types of vegetables available for purchase with a grocery store agent. For more information, see the [Entity guide](https://cloud.google.com/dialogflow/docs/entities-overview).
**/
var GoogleCloudDialogflowV2EntityType = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2EntityType, _super);
    function GoogleCloudDialogflowV2EntityType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoExpansionMode" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2EntityType.prototype, "autoExpansionMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2EntityType.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableFuzzyExtraction" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDialogflowV2EntityType.prototype, "enableFuzzyExtraction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entities", elemType: GoogleCloudDialogflowV2EntityTypeEntity }),
        __metadata("design:type", Array)
    ], GoogleCloudDialogflowV2EntityType.prototype, "entities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2EntityType.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2EntityType.prototype, "name", void 0);
    return GoogleCloudDialogflowV2EntityType;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2EntityType };
