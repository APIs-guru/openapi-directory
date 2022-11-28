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
import { SoftwareRecipeArtifact } from "./softwarerecipeartifact";
import { SoftwareRecipeStep } from "./softwarerecipestep";
export var SoftwareRecipeDesiredStateEnum;
(function (SoftwareRecipeDesiredStateEnum) {
    SoftwareRecipeDesiredStateEnum["DesiredStateUnspecified"] = "DESIRED_STATE_UNSPECIFIED";
    SoftwareRecipeDesiredStateEnum["Installed"] = "INSTALLED";
    SoftwareRecipeDesiredStateEnum["Updated"] = "UPDATED";
    SoftwareRecipeDesiredStateEnum["Removed"] = "REMOVED";
})(SoftwareRecipeDesiredStateEnum || (SoftwareRecipeDesiredStateEnum = {}));
// SoftwareRecipe
/**
 * A software recipe is a set of instructions for installing and configuring a piece of software. It consists of a set of artifacts that are downloaded, and a set of steps that install, configure, and/or update the software. Recipes support installing and updating software from artifacts in the following formats: Zip archive, Tar archive, Windows MSI, Debian package, and RPM package. Additionally, recipes support executing a script (either defined in a file or directly in this api) in bash, sh, cmd, and powershell. Updating a software recipe If a recipe is assigned to an instance and there is a recipe with the same name but a lower version already installed and the assigned state of the recipe is `UPDATED`, then the recipe is updated to the new version. Script Working Directories Each script or execution step is run in its own temporary directory which is deleted after completing the step.
**/
var SoftwareRecipe = /** @class */ (function (_super) {
    __extends(SoftwareRecipe, _super);
    function SoftwareRecipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=artifacts", elemType: SoftwareRecipeArtifact }),
        __metadata("design:type", Array)
    ], SoftwareRecipe.prototype, "artifacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desiredState" }),
        __metadata("design:type", String)
    ], SoftwareRecipe.prototype, "desiredState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=installSteps", elemType: SoftwareRecipeStep }),
        __metadata("design:type", Array)
    ], SoftwareRecipe.prototype, "installSteps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SoftwareRecipe.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateSteps", elemType: SoftwareRecipeStep }),
        __metadata("design:type", Array)
    ], SoftwareRecipe.prototype, "updateSteps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], SoftwareRecipe.prototype, "version", void 0);
    return SoftwareRecipe;
}(SpeakeasyBase));
export { SoftwareRecipe };
