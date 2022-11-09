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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var ProjectsRow = /** @class */ (function (_super) {
    __extends(ProjectsRow, _super);
    function ProjectsRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=bbox" }),
        __metadata("design:type", Array)
    ], ProjectsRow.prototype, "bbox", void 0);
    __decorate([
        Metadata({ data: "json, name=countries" }),
        __metadata("design:type", Array)
    ], ProjectsRow.prototype, "countries", void 0);
    __decorate([
        Metadata({ data: "json, name=entity" }),
        __metadata("design:type", String)
    ], ProjectsRow.prototype, "entity", void 0);
    __decorate([
        Metadata({ data: "json, name=firstUpdated" }),
        __metadata("design:type", Date)
    ], ProjectsRow.prototype, "firstUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ProjectsRow.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=isAnalysis" }),
        __metadata("design:type", Boolean)
    ], ProjectsRow.prototype, "isAnalysis", void 0);
    __decorate([
        Metadata({ data: "json, name=isMobile" }),
        __metadata("design:type", Boolean)
    ], ProjectsRow.prototype, "isMobile", void 0);
    __decorate([
        Metadata({ data: "json, name=lastUpdated" }),
        __metadata("design:type", Date)
    ], ProjectsRow.prototype, "lastUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=locationIds" }),
        __metadata("design:type", Array)
    ], ProjectsRow.prototype, "locationIds", void 0);
    __decorate([
        Metadata({ data: "json, name=locations" }),
        __metadata("design:type", Number)
    ], ProjectsRow.prototype, "locations", void 0);
    __decorate([
        Metadata({ data: "json, name=measurements" }),
        __metadata("design:type", Number)
    ], ProjectsRow.prototype, "measurements", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProjectsRow.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=parameters", elemType: shared.ProjectParameterDetails }),
        __metadata("design:type", Array)
    ], ProjectsRow.prototype, "parameters", void 0);
    __decorate([
        Metadata({ data: "json, name=sensorType" }),
        __metadata("design:type", String)
    ], ProjectsRow.prototype, "sensorType", void 0);
    __decorate([
        Metadata({ data: "json, name=sources" }),
        __metadata("design:type", Array)
    ], ProjectsRow.prototype, "sources", void 0);
    __decorate([
        Metadata({ data: "json, name=subtitle" }),
        __metadata("design:type", String)
    ], ProjectsRow.prototype, "subtitle", void 0);
    return ProjectsRow;
}(SpeakeasyBase));
export { ProjectsRow };
