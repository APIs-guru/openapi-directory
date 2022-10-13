package shared

type SubmitPodcastResponseStatusEnum string

const (
	SubmitPodcastResponseStatusEnumFound    SubmitPodcastResponseStatusEnum = "found"
	SubmitPodcastResponseStatusEnumInReview SubmitPodcastResponseStatusEnum = "in review"
)

type SubmitPodcastResponse struct {
	Podcast PodcastMinimum                  `json:"podcast"`
	Status  SubmitPodcastResponseStatusEnum `json:"status"`
}
