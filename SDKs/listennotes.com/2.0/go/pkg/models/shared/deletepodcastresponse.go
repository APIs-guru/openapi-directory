package shared




type DeletePodcastResponseStatusEnum string

const (
    DeletePodcastResponseStatusEnumDeleted DeletePodcastResponseStatusEnum = "deleted"
DeletePodcastResponseStatusEnumInReview DeletePodcastResponseStatusEnum = "in review"
)


type DeletePodcastResponse struct {
    Status DeletePodcastResponseStatusEnum `json:"status"`
    
}

