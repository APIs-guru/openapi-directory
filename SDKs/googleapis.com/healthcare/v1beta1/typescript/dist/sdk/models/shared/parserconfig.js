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
import { SchemaPackage } from "./schemapackage";
export var ParserConfigVersionEnum;
(function (ParserConfigVersionEnum) {
    ParserConfigVersionEnum["ParserVersionUnspecified"] = "PARSER_VERSION_UNSPECIFIED";
    ParserConfigVersionEnum["V1"] = "V1";
    ParserConfigVersionEnum["V2"] = "V2";
    ParserConfigVersionEnum["V3"] = "V3";
})(ParserConfigVersionEnum || (ParserConfigVersionEnum = {}));
// ParserConfig
/**
 * The configuration for the parser. It determines how the server parses the messages.
**/
var ParserConfig = /** @class */ (function (_super) {
    __extends(ParserConfig, _super);
    function ParserConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowNullHeader" }),
        __metadata("design:type", Boolean)
    ], ParserConfig.prototype, "allowNullHeader", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=schema" }),
        __metadata("design:type", SchemaPackage)
    ], ParserConfig.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=segmentTerminator" }),
        __metadata("design:type", String)
    ], ParserConfig.prototype, "segmentTerminator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], ParserConfig.prototype, "version", void 0);
    return ParserConfig;
}(SpeakeasyBase));
export { ParserConfig };
