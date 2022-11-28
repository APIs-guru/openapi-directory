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
import { StructType } from "./structtype";
export var TypeCodeEnum;
(function (TypeCodeEnum) {
    TypeCodeEnum["TypeCodeUnspecified"] = "TYPE_CODE_UNSPECIFIED";
    TypeCodeEnum["Bool"] = "BOOL";
    TypeCodeEnum["Int64"] = "INT64";
    TypeCodeEnum["Float64"] = "FLOAT64";
    TypeCodeEnum["Timestamp"] = "TIMESTAMP";
    TypeCodeEnum["Date"] = "DATE";
    TypeCodeEnum["String"] = "STRING";
    TypeCodeEnum["Bytes"] = "BYTES";
    TypeCodeEnum["Array"] = "ARRAY";
    TypeCodeEnum["Struct"] = "STRUCT";
    TypeCodeEnum["Numeric"] = "NUMERIC";
    TypeCodeEnum["Json"] = "JSON";
})(TypeCodeEnum || (TypeCodeEnum = {}));
export var TypeTypeAnnotationEnum;
(function (TypeTypeAnnotationEnum) {
    TypeTypeAnnotationEnum["TypeAnnotationCodeUnspecified"] = "TYPE_ANNOTATION_CODE_UNSPECIFIED";
    TypeTypeAnnotationEnum["PgNumeric"] = "PG_NUMERIC";
    TypeTypeAnnotationEnum["PgJsonb"] = "PG_JSONB";
})(TypeTypeAnnotationEnum || (TypeTypeAnnotationEnum = {}));
// Type
/**
 * `Type` indicates the type of a Cloud Spanner value, as might be stored in a table cell or returned from an SQL query.
**/
var Type = /** @class */ (function (_super) {
    __extends(Type, _super);
    function Type() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arrayElementType" }),
        __metadata("design:type", Type)
    ], Type.prototype, "arrayElementType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], Type.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=structType" }),
        __metadata("design:type", StructType)
    ], Type.prototype, "structType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=typeAnnotation" }),
        __metadata("design:type", String)
    ], Type.prototype, "typeAnnotation", void 0);
    return Type;
}(SpeakeasyBase));
export { Type };
