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
import { Hl7SchemaConfig } from "./hl7schemaconfig";
import { Hl7TypesConfig } from "./hl7typesconfig";
export var SchemaPackageSchematizedParsingTypeEnum;
(function (SchemaPackageSchematizedParsingTypeEnum) {
    SchemaPackageSchematizedParsingTypeEnum["SchematizedParsingTypeUnspecified"] = "SCHEMATIZED_PARSING_TYPE_UNSPECIFIED";
    SchemaPackageSchematizedParsingTypeEnum["SoftFail"] = "SOFT_FAIL";
    SchemaPackageSchematizedParsingTypeEnum["HardFail"] = "HARD_FAIL";
})(SchemaPackageSchematizedParsingTypeEnum || (SchemaPackageSchematizedParsingTypeEnum = {}));
export var SchemaPackageUnexpectedSegmentHandlingEnum;
(function (SchemaPackageUnexpectedSegmentHandlingEnum) {
    SchemaPackageUnexpectedSegmentHandlingEnum["UnexpectedSegmentHandlingModeUnspecified"] = "UNEXPECTED_SEGMENT_HANDLING_MODE_UNSPECIFIED";
    SchemaPackageUnexpectedSegmentHandlingEnum["Fail"] = "FAIL";
    SchemaPackageUnexpectedSegmentHandlingEnum["Skip"] = "SKIP";
    SchemaPackageUnexpectedSegmentHandlingEnum["Parse"] = "PARSE";
})(SchemaPackageUnexpectedSegmentHandlingEnum || (SchemaPackageUnexpectedSegmentHandlingEnum = {}));
// SchemaPackage
/**
 * A schema package contains a set of schemas and type definitions.
**/
var SchemaPackage = /** @class */ (function (_super) {
    __extends(SchemaPackage, _super);
    function SchemaPackage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ignoreMinOccurs" }),
        __metadata("design:type", Boolean)
    ], SchemaPackage.prototype, "ignoreMinOccurs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schemas", elemType: Hl7SchemaConfig }),
        __metadata("design:type", Array)
    ], SchemaPackage.prototype, "schemas", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schematizedParsingType" }),
        __metadata("design:type", String)
    ], SchemaPackage.prototype, "schematizedParsingType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=types", elemType: Hl7TypesConfig }),
        __metadata("design:type", Array)
    ], SchemaPackage.prototype, "types", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unexpectedSegmentHandling" }),
        __metadata("design:type", String)
    ], SchemaPackage.prototype, "unexpectedSegmentHandling", void 0);
    return SchemaPackage;
}(SpeakeasyBase));
export { SchemaPackage };
