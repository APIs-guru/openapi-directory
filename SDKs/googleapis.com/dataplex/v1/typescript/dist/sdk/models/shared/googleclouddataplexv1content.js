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
import { GoogleCloudDataplexV1ContentNotebook } from "./googleclouddataplexv1contentnotebook";
import { GoogleCloudDataplexV1ContentSqlScript } from "./googleclouddataplexv1contentsqlscript";
// GoogleCloudDataplexV1ContentInput
/**
 * Content represents a user-visible notebook or a sql script
**/
var GoogleCloudDataplexV1ContentInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1ContentInput, _super);
    function GoogleCloudDataplexV1ContentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataText" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1ContentInput.prototype, "dataText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1ContentInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudDataplexV1ContentInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notebook" }),
        __metadata("design:type", GoogleCloudDataplexV1ContentNotebook)
    ], GoogleCloudDataplexV1ContentInput.prototype, "notebook", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1ContentInput.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sqlScript" }),
        __metadata("design:type", GoogleCloudDataplexV1ContentSqlScript)
    ], GoogleCloudDataplexV1ContentInput.prototype, "sqlScript", void 0);
    return GoogleCloudDataplexV1ContentInput;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1ContentInput };
// GoogleCloudDataplexV1Content
/**
 * Content represents a user-visible notebook or a sql script
**/
var GoogleCloudDataplexV1Content = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1Content, _super);
    function GoogleCloudDataplexV1Content() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Content.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataText" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Content.prototype, "dataText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Content.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudDataplexV1Content.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Content.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notebook" }),
        __metadata("design:type", GoogleCloudDataplexV1ContentNotebook)
    ], GoogleCloudDataplexV1Content.prototype, "notebook", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Content.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sqlScript" }),
        __metadata("design:type", GoogleCloudDataplexV1ContentSqlScript)
    ], GoogleCloudDataplexV1Content.prototype, "sqlScript", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Content.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Content.prototype, "updateTime", void 0);
    return GoogleCloudDataplexV1Content;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1Content };
