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
export var ImportFromUrlInputAccessEnum;
(function (ImportFromUrlInputAccessEnum) {
    ImportFromUrlInputAccessEnum["PublicIndexable"] = "PUBLIC_INDEXABLE";
    ImportFromUrlInputAccessEnum["PublicNotIndexable"] = "PUBLIC_NOT_INDEXABLE";
    ImportFromUrlInputAccessEnum["HiddenIndexable"] = "HIDDEN_INDEXABLE";
    ImportFromUrlInputAccessEnum["HiddenNotIndexable"] = "HIDDEN_NOT_INDEXABLE";
    ImportFromUrlInputAccessEnum["HiddenPrivate"] = "HIDDEN_PRIVATE";
    ImportFromUrlInputAccessEnum["Private"] = "PRIVATE";
})(ImportFromUrlInputAccessEnum || (ImportFromUrlInputAccessEnum = {}));
export var ImportFromUrlInputDuplicateValidationScopeEnum;
(function (ImportFromUrlInputDuplicateValidationScopeEnum) {
    ImportFromUrlInputDuplicateValidationScopeEnum["EntirePortal"] = "ENTIRE_PORTAL";
    ImportFromUrlInputDuplicateValidationScopeEnum["ExactFolder"] = "EXACT_FOLDER";
})(ImportFromUrlInputDuplicateValidationScopeEnum || (ImportFromUrlInputDuplicateValidationScopeEnum = {}));
export var ImportFromUrlInputDuplicateValidationStrategyEnum;
(function (ImportFromUrlInputDuplicateValidationStrategyEnum) {
    ImportFromUrlInputDuplicateValidationStrategyEnum["None"] = "NONE";
    ImportFromUrlInputDuplicateValidationStrategyEnum["Reject"] = "REJECT";
    ImportFromUrlInputDuplicateValidationStrategyEnum["ReturnExisting"] = "RETURN_EXISTING";
})(ImportFromUrlInputDuplicateValidationStrategyEnum || (ImportFromUrlInputDuplicateValidationStrategyEnum = {}));
var ImportFromUrlInput = /** @class */ (function (_super) {
    __extends(ImportFromUrlInput, _super);
    function ImportFromUrlInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=access" }),
        __metadata("design:type", String)
    ], ImportFromUrlInput.prototype, "access", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duplicateValidationScope" }),
        __metadata("design:type", String)
    ], ImportFromUrlInput.prototype, "duplicateValidationScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duplicateValidationStrategy" }),
        __metadata("design:type", String)
    ], ImportFromUrlInput.prototype, "duplicateValidationStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folderId" }),
        __metadata("design:type", String)
    ], ImportFromUrlInput.prototype, "folderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folderPath" }),
        __metadata("design:type", String)
    ], ImportFromUrlInput.prototype, "folderPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ImportFromUrlInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overwrite" }),
        __metadata("design:type", Boolean)
    ], ImportFromUrlInput.prototype, "overwrite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl" }),
        __metadata("design:type", String)
    ], ImportFromUrlInput.prototype, "ttl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ImportFromUrlInput.prototype, "url", void 0);
    return ImportFromUrlInput;
}(SpeakeasyBase));
export { ImportFromUrlInput };
