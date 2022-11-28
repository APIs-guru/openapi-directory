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
import { GoogleAppsScriptTypeFunctionSet } from "./googleappsscripttypefunctionset";
import { GoogleAppsScriptTypeUser } from "./googleappsscripttypeuser";
export var FileTypeEnum;
(function (FileTypeEnum) {
    FileTypeEnum["EnumTypeUnspecified"] = "ENUM_TYPE_UNSPECIFIED";
    FileTypeEnum["ServerJs"] = "SERVER_JS";
    FileTypeEnum["Html"] = "HTML";
    FileTypeEnum["Json"] = "JSON";
})(FileTypeEnum || (FileTypeEnum = {}));
// File
/**
 * An individual file within a script project. A file is a third-party source code created by one or more developers. It can be a server-side JS code, HTML, or a configuration file. Each script project can contain multiple files.
**/
var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], File.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=functionSet" }),
        __metadata("design:type", GoogleAppsScriptTypeFunctionSet)
    ], File.prototype, "functionSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifyUser" }),
        __metadata("design:type", GoogleAppsScriptTypeUser)
    ], File.prototype, "lastModifyUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], File.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], File.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], File.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], File.prototype, "updateTime", void 0);
    return File;
}(SpeakeasyBase));
export { File };
